import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  inputCountry: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(inputCountry:string):void{
    this.isError = false;
    this.inputCountry = inputCountry;

    this.countryService.searchCapital(inputCountry)
    .subscribe((countries)=>{
      this.countries = countries;
    }, (err)=>{
      this.isError = true;
      this.countries = [];
    });
  }
}
