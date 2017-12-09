import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Pais, PaisId } from '../servicios';

@Injectable()
export class DatosPaisService {

  private paisCollection: AngularFirestoreCollection<PaisId>;

  constructor(private db: AngularFirestore) {
  }

  getPaises(): Observable<PaisId[]> {
    this.paisCollection = this.db.collection<PaisId>('paises');
    return this.paisCollection.snapshotChanges().map(coleccion => {
      return coleccion.map(datosDocumentos => {
        const data = datosDocumentos.payload.doc.data() as Pais;
        const id = datosDocumentos.payload.doc.id;
        return {id, ...data};
      })
    });
  }
  
  getPaisNombre( nombre: string ): Observable<PaisId> {
    this.paisCollection = this.db.
    collection<PaisId>('paises', ref => ref.where('nombre','==','nombre') );
    let listaPais: Observable<PaisId[]>;
    listaPais = this.paisCollection.snapshotChanges().map(coleccion => {
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

    return itemDoc.snapshotChanges().map( elemento => {
      const data = elemento.payload.data() as Pais;
      const id = elemento.payload.id;
      return  {id, ...data};
    } );
  }
  
  agregarPais(pais: Pais): string{
    this.paisCollection = this.db.collection<PaisId>('paises');
    const nuevoPais: Pais = {
      nombre: pais.nombre
    };
    let resultado = this.paisCollection.add(nuevoPais);
    let mensaje: string;
    resultado.then( () => mensaje = 'País agregado satisfactoriamente.')
              .catch(err => mensaje = 'Error al agregar país: ' + err);
    return mensaje;

  }
  
  editarPais(pais: PaisId): string{
    let itemDoc: AngularFirestoreDocument<PaisId>;
    itemDoc = this.db.doc<PaisId>('paises/' + pais.id);
    let resultado = itemDoc.set(pais);
    let mensaje: string;
    resultado.then( () => mensaje = 'País modificado satisfactoriamente.')
              .catch(err => mensaje = 'Error al modificar país: ' + err);
    return mensaje;
  }
  
  borrarPais(pais: PaisId):string{
    let itemDoc: AngularFirestoreDocument<PaisId>;
    itemDoc = this.db.doc<PaisId>('paises/' + pais.id);
    let resultado = itemDoc.delete();
    let mensaje: string;
    resultado.then( () => mensaje = 'País borrado satisfactoriamente.')
              .catch(err => mensaje = 'Error al borrar país: ' + err);
    return mensaje;
  }


}