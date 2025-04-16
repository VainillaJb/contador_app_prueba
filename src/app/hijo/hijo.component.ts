import { Component } from '@angular/core';
import {Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

// hijo.component.ts
@Input() nombre: string = '';
@Output() sumar = new EventEmitter<number>();
sumarUno() {
 this.sumar.emit(1);
}
  
}
