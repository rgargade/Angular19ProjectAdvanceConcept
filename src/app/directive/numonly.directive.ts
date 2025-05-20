import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumonly]',
  standalone: true
})
export class NumonlyDirective {

  constructor(private elementRef:ElementRef) { 

  }
  
  @HostListener('input',['$event'])
  onChange(event:any){
  const currentVal = this.elementRef.nativeElement.value;
  



  }



}
