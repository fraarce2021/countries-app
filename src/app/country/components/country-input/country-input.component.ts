import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject<string>();

  inputCountry: string = '';

  ngOnInit(){
this.debouncer
.pipe(
  debounceTime(300)
)
.subscribe(value=>{
  this.onDebounce.emit(value);
});
  }

  search():void{
    this.onEnter.emit(this.inputCountry);
  }

  keyPressed(event:any){
    this.debouncer.next(this.inputCountry);
  }
}
