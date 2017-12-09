import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { ModeloLista, EstadoRegionId, PaisId } from '../../servicios';
import { DialogoEntradaComponent, DialogoConfirmacionComponent } from '../../utilidades';
import { DatosPaisService, DatosEstadoService } from "../../core";

@Component({
  selector: 'app-estado-region',
  templateUrl: './estado-region.component.html',
  styleUrls: ['./estado-region.component.css']
})
export class EstadoRegionComponent implements OnInit {


  private idPaisSeleccionado: number;
  private paisSeleccionado: ModeloLista;
  private estadoSeleccionado: ModeloLista;
  private paises: ModeloLista[] = [];
  private estados: ModeloLista[] = [];
  private mensajeError: string;
/*

  constructor(public dialog: MatDialog, 
              public datosPaises: DatosPaisService, 
              public datosEstado: DatosEstadoService) { }

  private abrirDialogo(nuevo: boolean, paisSeleccionado?: ModeloLista){
    let dialogRef: MatDialogRef<DialogoEntradaComponent>;
    
    if (nuevo){
      dialogRef = this.dialog.open(DialogoEntradaComponent,{ data: {id: 0, nombre: ""} } );
      dialogRef.afterClosed().subscribe( (salida:ModeloLista) => {this.agregaEstado( salida );} );
    }else{
      dialogRef = this.dialog.open(DialogoEntradaComponent,{data: paisSeleccionado});
      dialogRef.afterClosed().subscribe( (salida:ModeloLista) => {this.editarEstado( salida );} );
    }
  }

    public abrirDialogoConfirmacion(mensaje: string, id: number) {
  
    let dialogRef: MatDialogRef<DialogoConfirmacionComponent>;
    dialogRef = this.dialog.open(DialogoConfirmacionComponent, {data: mensaje});
    dialogRef.afterClosed().subscribe(salida => {this.borrarEstado(id, salida);});   
  }

  private agregaEstado(entrada: ModeloLista): void {
    let observador: Observer<EstadoRegionId> = {
      next: dato => this.actualizarListaEstados(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (entrada) {
      let nuevoEstado: EstadoRegionId = {
        id: '',
        nombre: entrada.nombre.toUpperCase(),
        : this.paisSeleccionado.nombre,
        pais: 
      };
      nuevoEstado.id = null;
      nuevoEstado.nombre = entrada.nombre.toUpperCase();
      nuevoEstado.pais.idPais = this.paisSeleccionado.id;
      nuevoEstado.pais.nombre = this.paisSeleccionado.nombre;

      let estado: EstadoRegionId = {id: '', nombre: entrada.nombre.toUpperCase(), pais:{idPais: this.idPaisSeleccionado, nombre: this.paisSeleccionado.nombre}};
      this.datosEstado.agregarEstadoRegion(nuevoEstado).subscribe(observador);      
    }
  }

  private editarEstado(entrada: ModeloLista): void {
      let observador: Observer<EstadoRegionId> = {
      next: dato => this.actualizarListaEstados(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    if (entrada) {
      let nuevoEstado: EstadoRegion = new EstadoRegion();
      nuevoEstado.idEstadoRegion = entrada.id; 
      nuevoEstado.nombre = entrada.nombre.toUpperCase();
      nuevoEstado.pais.idPais = this.paisSeleccionado.id;
      nuevoEstado.pais.nombre = this.paisSeleccionado.nombre;

      this.datosEstado.editarEstado(nuevoEstado).subscribe(observador);
    }
  }


  private borrarEstado(id: number, resultado: boolean):void{
    let observador: Observer<EstadoRegion> = {
      next: dato => this.actualizarListaEstados(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (resultado){
      this.datosEstado.borrarEstado(id).subscribe(observador);
    }
  }

  ngOnInit() {
    this.paises$ = this.datos.getPaises();
  }

  private actualizarListaPaises():void {
      let observador: Observer<Pais[]> = {
      next: dato => this.llenarListaPaises(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.datosPaises.getPaises().subscribe(observador);
  }

  private llenarListaPaises(datos: Pais[]):void{
    this.paises.length = 0;
    datos.forEach( s => this.paises.push( {id: s.idPais, nombre: s.nombre} ) );
  }


  private actualizarListaEstados():void {
      let observador: Observer<EstadoRegion[]> = {
      next: dato => this.llenarListaEstados(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.datosEstado.getEstadosPais(this.paisSeleccionado.id).subscribe(observador);
  }

  private llenarListaEstados(datos: EstadoRegion[]):void {
    this.estados.length = 0;
    datos.forEach( s => this.estados.push( {id: s.idEstadoRegion, nombre: s.nombre} ) );
  
  }

  eventoEjecucion(datos: {elemento: ModeloLista, accion: string}){

    if (datos.accion === 'editar') {

      this.abrirDialogo(false, datos.elemento);
   
    } else if (datos.accion === 'borrar') {
      let mensaje: string = '¿Desea borrar el estado?';
      this.abrirDialogoConfirmacion(mensaje, datos.elemento.id);

    }

  }
 
  private establecePaisSeleccionado():void {

    this.paisSeleccionado = this.paises.find(item => item.id === this.idPaisSeleccionado );

    this.actualizarListaEstados();
  }

  public restablecedor():void {
    this.idPaisSeleccionado = undefined;
    this.paisSeleccionado = undefined;
    this.estados.length = 0;
    this.actualizarListaPaises();
  }
*/

ngOnInit() {
}

}
