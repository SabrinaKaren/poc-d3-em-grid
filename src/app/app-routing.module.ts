import { Poc3TableComponent } from './pages/poc3-table/poc3-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Poc1TableComponent } from './pages/poc1-table/poc1-table.component';
import { Poc2GridComponent } from './pages/poc2-grid/poc2-grid.component';

const routes: Routes = [
  { path: 'poc1', component: Poc1TableComponent },
  { path: 'poc2', component: Poc2GridComponent },
  { path: 'poc3', component: Poc3TableComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }