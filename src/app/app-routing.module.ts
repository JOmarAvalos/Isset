import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'quienes', component: QuienesComponent},
  { path: 'mision', component: MisionComponent},
  { path: 'vision', component: VisionComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'telefonia', component: TelefoniaComponent},
  { path: 'computo', component: ComputoComponent},
  { path: 'redes', component: RedesComponent},
  { path: 'seguridad', component: SeguridadComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'promociones', component: PromocionesComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
