import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-statement',
  standalone: true,
  imports: [CommonModule,NgIf,FormsModule,NgFor],
  templateUrl: './control-flow-statement.component.html',
  styleUrl: './control-flow-statement.component.css'
})
export class ControlFlowStatementComponent {

  isDivVisible:string = 'Yes';
  num1:string="123";
  num2:string="123";
  isCheck:boolean=true;
  cityList:string [] = ["Pune","Nagpur","Mumbai","Solapur"];
  rollNoList : number[] = [11,22,33,44,55,66,77,88];
  studentId:any;
  studentName:string="";

  studentList:any = [
    {id:101, name: 'Chetan', city: 'Pune', isActive: true, attendance:50 },
    {id:102, name: 'Ajay', city: 'Mumbai', isActive: true, attendance:60 },
    {id:103, name: 'Digvijay', city: 'Nagpur', isActive: false,attendance:65 },
    {id:104, name: 'Dhiraj', city: 'Dallas', isActive: false, attendance: 70 },
    {id:105, name: 'Mayank', city: 'Abudhabi', isActive: true, attendance: 76 },
    {id:106, name: 'Santos', city: 'Texas', isActive: true, attendance: 85 }

  ]

  getDetails(event:any){
   
   this.studentId = event.target.value; 
   switch(this.studentId){
    case "101":
     this.studentName = "Chetal";
     break;
     case "102":
     this.studentName = "Ajay";
     break;
     case "103":
     this.studentName = "Digvijay";
     break;
     case "104":
     this.studentName = "Dhiraj";
     break;
     case "105":
     this.studentName = "Mayank";
     break;
     case "106":
     this.studentName = "Santos";
     break;
     default:
      this.studentName = "Invalid Name Selection";
   }
   alert(`${this.studentName} Student is selected`)
  }


  onShowDiv1(){
    this.isDivVisible = 'Yes';
  }

  onHideDiv1(){
    this.isDivVisible = 'ASDADS';
  }
}
