import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    SeeCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
