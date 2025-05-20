import { Component } from '@angular/core';
import { CommonModule, DatePipe, JsonPipe, LowerCasePipe,SlicePipe,TitleCasePipe,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,CommonModule,FormsModule, DatePipe,SlicePipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
 firstName:string = "chetan kumar";
 lastName = "Jogi";
 courseName:string;
 textColor:string = "text-danger"
 currentDate:Date = new Date();

 cityList:string[] = ["Pune","Mumbai","Jalgaon","Nagpur","Thane"];

 studentObj :any = {
  name:'chetan',
  city:'Nagpur',
  state:'Mah',
  mobile:'9890164820'
 }

 constructor(){
  this.courseName = "Full Stack development";
 }


}
