import { Component, OnInit, ViewChild } from '@angular/core';

import { EstadoRegionComponent } from '../estado-region/estado-region.component';
import { PaisComponent } from '../pais/pais.component';
import { PoblacionComponent } from '../poblacion/poblacion.component';

@Component({
  selector: 'app-ubicacion-raiz',
  templateUrl: './ubicacion-raiz.component.html',
  styleUrls: ['./ubicacion-raiz.component.css']
})
export class UbicacionRaizComponent implements OnInit {

  @ViewChild(EstadoRegionComponent)
  private estadoCompomente: EstadoRegionComponent;

  @ViewChild(PaisComponent)
  private paisComponente: PaisComponent;

  @ViewChild(PoblacionComponent)
  private poblacionComponente: PoblacionComponent;

  constructor() { }

  private cambioTab(valor: any):void {
    switch (valor.index) {
      case 0:
        //this.paisComponente.actualizarLista();
        break;
      case 1:
        //this.estadoCompomente.restablecedor();
        break;
      case 2:
        //this.poblacionComponente.restablecedor();
        break;

    }
  
  }

  ngOnInit() {
  }

}
