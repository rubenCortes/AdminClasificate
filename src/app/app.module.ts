import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';

import { MaterialPersonalizadoModule } from './material-personalizado/material-personalizado.module';

import { UbicacionModule } from './ubicacion/ubicacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialPersonalizadoModule,
    AngularFireModule.initializeApp(environment.firebase, 'admin-clasificate'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    UbicacionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
