import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent  {

  inputCountry: string = 'Hello World!';

  constructor() { }

  search():void{
    console.log(this.inputCountry);
  }

}
