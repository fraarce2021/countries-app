import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent  {

  inputCountry: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(inputCountry:string):void{
    this.isError = false;
    this.inputCountry = inputCountry;
    this.countryService.searchCountry(inputCountry)
    .subscribe((countries)=>{
      this.countries = countries;
    }, (err)=>{
      this.isError = true;
      this.countries = [];
    });
  }

  suggestions(term: string){
    this.isError = false;
    console.log(term)
  }
}
