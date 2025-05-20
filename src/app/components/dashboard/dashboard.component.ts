import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { PipeComponent } from "../pipe/pipe.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PipeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @ViewChild("nameRef") textRef!:ElementRef;
  @ViewChild("h4text") h4textRef!:ElementRef;
  @ViewChild(PipeComponent) myPipeComponent!:PipeComponent;
  readValue(){
    // const txtRef = document.getElementById("txtName") as any;
    // if(txtRef){ 
    // alert(txtRef.value);

    if(this.textRef){
     const textvalue = this.textRef.nativeElement.value;
     alert(textvalue);
    }
    if(this.h4textRef){
      const h4textValue = this.h4textRef.nativeElement.innerText;
     alert(h4textValue)
    }

    if(this.myPipeComponent){
     const courseName = this.myPipeComponent.courseName;
      alert(courseName);
    }
    }
  }


