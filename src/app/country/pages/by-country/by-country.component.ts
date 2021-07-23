import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent  {

  inputCountry: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  countriesSuggestions: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }

  search(inputCountry:string):void{
    this.showSuggestions = false;
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
    this.inputCountry = term;
    this.showSuggestions = true;

    this.countryService.searchCountry(term)
    .subscribe(countries =>
      this.countriesSuggestions = countries.splice(0,3),
      (err)=> this.countriesSuggestions = []
    );
  }

  searchSuggestion(term: string):void{
    this.search(term);
  }
}
