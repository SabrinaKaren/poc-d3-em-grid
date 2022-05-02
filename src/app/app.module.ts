import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { Poc1TableComponent } from './pages/poc1-table/poc1-table.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { GenericComponent } from './shared/generic/generic.component';
import { ToTestsComponent } from './shared/to-tests/to-tests.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Poc2GridComponent } from './pages/poc2-grid/poc2-grid.component';
import { Poc3TableComponent } from './pages/poc3-table/poc3-table.component';

@NgModule({
  declarations: [
    AppComponent,
    Poc1TableComponent,
    GenericComponent,
    ToTestsComponent,
    BarChartComponent,
    LineChartComponent,
    Poc2GridComponent,
    Poc3TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
