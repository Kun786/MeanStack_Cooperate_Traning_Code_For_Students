import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMessage]'
})
export class MessageDirective {

  @Input() _DataStatusValue:any;
  //With _ElementReferecne We can change the properties of Html Elements

  constructor(private _ElementReference:ElementRef) { }

  ngOnInit(): void {
    if (this._DataStatusValue === false){
      this._ElementReference.nativeElement.style.color = "#f8f9fa";
      this._ElementReference.nativeElement.style.backgroundColor = "#dc3545";
    }else{
      this._ElementReference.nativeElement.style.color = "#f8f9fa";
      this._ElementReference.nativeElement.style.backgroundColor = "#28a745";
    }
  }

}
