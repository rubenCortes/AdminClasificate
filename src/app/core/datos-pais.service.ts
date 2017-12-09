import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';


import 'rxjs/add/operator/switchMap';
import "rxjs/add/operator/take";


import { Pais, PaisId } from '../servicios';


@Injectable()
export class DatosPaisService {


  constructor(private db: AngularFirestore) {

  }

  getPaises(): Observable<PaisId[]> {
    let paisCollection = this.db.collection<PaisId>('paises', ref => ref.orderBy('nombre') ) ;
    return paisCollection.snapshotChanges().map(coleccion => {
      return coleccion.map(datosDocumentos => {
        const data = datosDocumentos.payload.doc.data() as Pais;
        const id = datosDocumentos.payload.doc.id;
        return {id, ...data};
      })
    });
  }
  
  getPaisNombre( nombre: string ): Observable<PaisId> {
    let paisCollection = this.db.
    collection<PaisId>('paises', ref => ref.where('nombre','==','nombre') );
    let listaPais: Observable<PaisId[]>;
    listaPais = paisCollection.snapshotChanges().map(coleccion => {
      return coleccion.map(datosDocumentos => {
        const data = datosDocumentos.payload.doc.data() as Pais;
        const id = datosDocumentos.payload.doc.id;
        return {id, ...data};
      })
    });
    return listaPais.map(lista => {return lista[0];} );
  }
  
  getPais(id: string): Observable<PaisId> {
    let itemDoc: AngularFirestoreDocument<PaisId>;
    itemDoc = this.db.doc<PaisId>('paises/' + id);
    let listaPais: Observable<PaisId[]>;
    
    return itemDoc.snapshotChanges().map( elemento => {
      const data = elemento.payload.data() as Pais;
      const id = elemento.payload.id;
      return  {id, ...data};
    } );
  }
  

  agregarPais(pais: Pais): Observable<Promise<firebase.firestore.DocumentReference>>{
    
    let paisBusqueda = this.db.collection<PaisId>('paises', ref => ref.where('nombre', '==', pais.nombre) );
    let resultado = paisBusqueda.valueChanges().take(1).switchMap( datos => this.auxiliarAgregar(datos.length, pais.nombre) );
    return resultado;

  }

  auxiliarAgregar(encontrados: number, nombre: string ): Observable<Promise<firebase.firestore.DocumentReference>> {
    let sujeto = new Observable<Promise<firebase.firestore.DocumentReference>>( observador => {
      if (encontrados == 0) {
        const nuevoPais: Pais = {
          nombre: nombre
        };
        let paisCollection = this.db.collection<PaisId>('paises');
        observador.next( paisCollection.add(nuevoPais) );    
      } else {
    
        observador.error(`Pais: ${nombre}, ya está registrado.`);
      }
    });
    return sujeto;
  }

  
  editarPais(pais: PaisId): Observable<Promise<void>>{

    let paisBusqueda = this.db.collection<PaisId>('paises', ref => ref.where('nombre', '==', pais.nombre) );
    let resultado = paisBusqueda.valueChanges().take(1).switchMap( datos => this.auxiliarEdicion(datos.length, pais) );
    return resultado;

  }

  auxiliarEdicion(encontrados: number, pais: PaisId ): Observable<Promise<void>> {
    let sujeto = new Observable<Promise<void>>( observador => {
      if (encontrados == 0) {
        let itemDoc: AngularFirestoreDocument<PaisId>;
        itemDoc = this.db.doc<PaisId>('paises/' + pais.id);
        if (itemDoc) {
          let resultado = itemDoc.update(pais);
          observador.next( resultado );
        }
      } else {    
        observador.error(`Pais: ${pais.nombre}, ya está registrado.`);
      }
    });
    return sujeto;
  }



  borrarPais(pais: PaisId): Promise<void>{
    let itemDoc: AngularFirestoreDocument<PaisId>;
    itemDoc = this.db.doc<PaisId>('paises/' + pais.id);
    let resultado = itemDoc.delete();
    return resultado;
  }

}