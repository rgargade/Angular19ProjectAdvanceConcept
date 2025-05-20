import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgStyle,NgClass,FormsModule,ReactiveFormsModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progressValue:string = "";
  @Input() className:string = "";

  

}
