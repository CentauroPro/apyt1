import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { VelasComponent } from './componentes/velas/velas.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriavelasComponent } from './componentes/galeriavelas/galeriavelas.component';
import { GaleriajabonesComponent } from './componentes/galeriajabones/galeriajabones.component';
import { GaleriaduendesComponent } from './componentes/galeriaduendes/galeriaduendes.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { FotosmodalComponent } from './componentes/fotosmodal/fotosmodal.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { E404Component } from './componentes/e404/e404.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { CatalagoComponent } from './componentes/catalago/catalago.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { JabonesComponent } from './componentes/jabones/jabones.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraComponent,
    VelasComponent,
    InicioComponent,
    GaleriavelasComponent,
    GaleriajabonesComponent,
    GaleriaduendesComponent,
    GaleriaComponent,
    FotosmodalComponent,
    FooterComponent,
    E404Component,
    CuerpoComponent,
    ContactosComponent,
    CatalagoComponent,
    AcercadeComponent,
    JabonesComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
