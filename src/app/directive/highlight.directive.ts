import { Directive, ElementRef, HOST_TAG_NAME, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.color = "blue";
    this.elementRef.nativeElement.style.textDecoration = "underline";
   }

   @HostListener("mouseenter")
   onMouseEnter(){
    this.elementRef.nativeElement.style.color = "green"
   }

   @HostListener("mouseleave")
   onMouseLeave(){
    this.elementRef.nativeElement.style.color = "orange"
   }


}
