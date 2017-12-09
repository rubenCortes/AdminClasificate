import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaRaizComponent } from './categoria-raiz/categoria-raiz.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  declarations: [CategoriaComponent, CategoriaRaizComponent, SubCategoriaComponent]
})
export class CategoriaModule { }
