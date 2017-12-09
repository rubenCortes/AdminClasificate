import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { DialogoEntradaComponent } from './dialogo-entrada/dialogo-entrada.component';
import { ListaComponent } from './lista/lista.component';
import { ListaElementoComponent } from './lista-elemento/lista-elemento.component';
import { MaterialPersonalizadoModule } from '../material-personalizado/material-personalizado.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialPersonalizadoModule
  ],
  declarations: [DialogoConfirmacionComponent, DialogoEntradaComponent, ListaComponent, ListaElementoComponent],
  exports:[ListaComponent, DialogoEntradaComponent, DialogoConfirmacionComponent]
})
export class UtilidadesModule { }
