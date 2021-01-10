import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './registros/clientes/clientes.component';
import { ProveedoresComponent } from './registros/proveedores/proveedores.component';
import { ProductosComponent } from './registros/productos/productos.component';
import { InsumosComponent } from './registros/insumos/insumos.component';
import { ComprasComponent } from './carrito/compras/compras.component';
import { EmpleadoComponent } from './lista/empleado/empleado.component';
import { VentaComponent } from './tipo/venta/venta.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProveedoresComponent,
    ProductosComponent,
    InsumosComponent,
    ComprasComponent,
    EmpleadoComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
