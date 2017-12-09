import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbicacionRoutingModule } from './ubicacion-routing.module';
import { PaisComponent } from './pais/pais.component';
import { EstadoRegionComponent } from './estado-region/estado-region.component';
import { PoblacionComponent } from './poblacion/poblacion.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import { DialogoEntradaComponent } from '../utilidades/dialogo-entrada/dialogo-entrada.component';
import { DialogoConfirmacionComponent } from '../utilidades/dialogo-confirmacion/dialogo-confirmacion.component';
import { MaterialPersonalizadoModule } from '../material-personalizado/material-personalizado.module';
import { UbicacionRaizComponent } from './ubicacion-raiz/ubicacion-raiz.component';

@NgModule({
  imports: [
    CommonModule,
    UtilidadesModule,
    MaterialPersonalizadoModule,
    UbicacionRoutingModule
  ],
  declarations: [
    PaisComponent, 
    EstadoRegionComponent, 
    PoblacionComponent, 
    UbicacionRaizComponent
  ],
  entryComponents: [DialogoEntradaComponent, DialogoConfirmacionComponent]
})
export class UbicacionModule { }
