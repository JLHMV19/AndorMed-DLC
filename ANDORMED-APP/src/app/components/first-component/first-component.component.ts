import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  title = 'First component';
  description = 'This is the first component of the app';
  public users : any  [] = [{name: 'Jefte', age: 20}, {name: 'Oswaldo', age: 19}, {name: 'Diego', age: 19}];
  
}
