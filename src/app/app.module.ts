import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { TelefoniaComponent } from './components/servicios/telefonia/telefonia.component';
import { ComputoComponent } from './components/servicios/computo/computo.component';
import { RedesComponent } from './components/servicios/redes/redes.component';
import { SeguridadComponent } from './components/servicios/seguridad/seguridad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuienesComponent,
    ServiciosComponent,
    ProductosComponent,
    PromocionesComponent,
    ContactoComponent,
    MisionComponent,
    VisionComponent,
    TelefoniaComponent,
    ComputoComponent,
    RedesComponent,
    SeguridadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
