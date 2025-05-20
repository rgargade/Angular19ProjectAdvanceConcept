import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [NgClass,CommonModule,FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  div1Color:string = 'bg-primary';
  div2Color:string = 'bg-secondary';
  isActive:boolean = true;
  divClassOnInput:string = ""
 


  AddDiv1Color(color:string){
    this.div1Color = color
  }



}
