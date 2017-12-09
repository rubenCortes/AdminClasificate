import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
// import * as firebase from 'firebase/app';

import { ModeloLista, PaisId } from '../../servicios';
import { DatosPaisService } from '../../core';
import { DialogoEntradaComponent, DialogoConfirmacionComponent } from "../../utilidades";
import { Promise } from 'q';


@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  private paisSeleccionado: ModeloLista;
  private paises$: Observable<PaisId[]>;
  private mensajeError: string;

  constructor(public dialog: MatDialog, 
              public datos: DatosPaisService) { }

  public abrirDialogo(nuevo: boolean, paisSeleccionado?: ModeloLista){
    let dialogRef: MatDialogRef<DialogoEntradaComponent>;
    
    if (nuevo){ // Crear un país
      dialogRef = this.dialog.open(DialogoEntradaComponent,{ data: {id: 0, nombre: ""} } );
      dialogRef.afterClosed()
      .subscribe( (salida: ModeloLista) => {this.agregaPais( salida );} );
    }else{ // Editar un país
      dialogRef = this.dialog.open(DialogoEntradaComponent,{data: paisSeleccionado});
      dialogRef.afterClosed()
      .subscribe( (salida:ModeloLista) => {this.editarPais( salida );} );
    }
  }

  public abrirDialogoConfirmacion(mensaje: string, id: string) {
  
    let dialogRef: MatDialogRef<DialogoConfirmacionComponent>;
    dialogRef = this.dialog.open(DialogoConfirmacionComponent, {data: mensaje});
    dialogRef.afterClosed().subscribe(salida => {this.borrarPais(id, salida);});   
  }

  public agregaPais(entrada: ModeloLista): void {

    if (entrada) {

      let nuevoPais: PaisId = {id: '', nombre: entrada.nombre.toUpperCase()};
      this.datos.agregarPais(nuevoPais)
      .subscribe( promesa => promesa.then( datos => alert('País agregado satisfactoriamente, Id creado: ' + datos.id )).catch( err => alert('Error promesa') )
      , err => alert('Error de observable: ' + err) );
      
    }
  }

  public editarPais(entrada: ModeloLista): void {
    if (entrada) {
      let nuevoPais: PaisId = {id: entrada.id, nombre: entrada.nombre.toUpperCase()};

      this.datos.editarPais(nuevoPais).subscribe( promesa => promesa.then( () => alert('País modificado satisfactoriamente')).catch( err => alert('Error promesa') )
      , err => alert(err) );

    }
  }

  public borrarPais(id: string, resultado: boolean): void {
    
    let nuevoPais: PaisId = {id:id , nombre: ''};
    this.datos.borrarPais(nuevoPais).then( () => alert('País borrado satisfactoriamente.') )
    .catch(err => alert('Error al borrar país: ' + err) );

  }


  ngOnInit() {
    alert('Componente país iniciado ...');
    this.paises$ = this.datos.getPaises();
  }


  eventoEjecucion(datos: {elemento: ModeloLista, accion: string}){

    if (datos.accion === 'editar') {

      this.abrirDialogo(false, datos.elemento);
   
    } else if (datos.accion === 'borrar') {
      let mensaje: string = '¿Desea borrar el páis?';
      this.abrirDialogoConfirmacion(mensaje, datos.elemento.id);

    }

  }


}
