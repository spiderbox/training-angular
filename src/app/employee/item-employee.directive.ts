import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appItemEmployee]'
})
export class ItemEmployeeDirective implements OnInit {

  @Input() id: number
  constructor() { 
    
  }

  ngOnInit(): void {}

}
