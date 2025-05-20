import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-group',
  standalone: true,
  imports: [],
  templateUrl: './btn-group.component.html',
  styleUrl: './btn-group.component.css'
})
export class BtnGroupComponent {

  @Input() btnList:string[] = ["Success","Danger","warning"];
  @Output() onBtnClicked = new EventEmitter<string>();
  selectedBtnText:string = "";

  onBtnSelect(btnName:string){
    this.onBtnClicked.emit(btnName)
    this.selectedBtnText = btnName;
  }

}
