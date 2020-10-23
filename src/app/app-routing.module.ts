import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'quienes', component: QuienesComponent},
  { path: 'servicios', component: ServiciosComponent},
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
