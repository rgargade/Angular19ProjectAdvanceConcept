import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {

  // Data types in jS as same in TS
  // number.boolean,string,date => Primitive data types
  // Object and array
  // null, undefined
  
  //var name = "abfssd";

  // Data types In TS as string, number, date, boolean
  firstName:string = "";
  rollNo:number = 123;
  dob:Date = new Date();
  isValid:boolean = true;
  student:any;
   inputType = "radio";
   divClassName = "primary"

  constructor(){
    this.firstName = "Chetan1";
    this.firstName = 'chetan';

    this.student = "Divansh";
    this.student = 123;
    this.student = true;
   
  }

  showWelcomeMessage(){
    alert("Welcome B-27 ")
    console.log("Hello")
  }

  showMsg(msg:string){
    alert(msg);
  }

  onCheckChange(event:any){
     console.log(event)
  }
}
