import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { TitulosPipe } from './pipes/titulos.pipe';

import {HttpClientModule} from '@angular/common/http';
import { OrdenarAparienciaPipe } from './pipes/ordenar-apariencia.pipe';
import { OrdenarNombrePipe } from './pipes/ordenar-nombre.pipe';
import { BurcarnombrePipe } from './pipes/burcarnombre.pipe';

import {FormsModule} from '@angular/forms';
import { BuscarAparienciaPipe } from './pipes/buscar-apariencia.pipe';
import { QuitarRepetidosPipe } from './pipes/quitar-repetidos.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetallesComponent,
    TitulosPipe,
    OrdenarAparienciaPipe,
    OrdenarNombrePipe,
    BurcarnombrePipe,
    BuscarAparienciaPipe,
    QuitarRepetidosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
