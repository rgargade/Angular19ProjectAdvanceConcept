import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api-call',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api-call.component.html',
  styleUrl: './get-api-call.component.css',
})
export class GetApiCallComponent implements OnInit {
  http = inject(HttpClient);

  //   constructor(private http:HttpClient){
  // }

  rfqList: any[] = [];
  customerList: any[] = [];

  ngOnInit(): void {
    // this.http.get("https://projectapi.gerasim.in/api/RfqTracker/GetRFQs").subscribe((res:any)=>{
    //   debugger;
    //   this.rfqList = res;
    // })

    // this.http.get("https://projectapi.gerasim.in/api/RfqTracker/GetAllCustomer").subscribe((res:any)=>{
    //   this.customerList = res.data;
    //   debugger;
    // })

    this.getRFQList();
    this.getCustomerList();
  }

  getRFQList() {
    this.http
      .get('https://projectapi.gerasim.in/api/RfqTracker/GetRFQs')
      .subscribe((res: any) => {
        this.rfqList = res;
      });
  }

  getCustomerList() {
    this.http
      .get('https://projectapi.gerasim.in/api/RfqTracker/GetAllCustomer')
      .subscribe((res: any) => {
        this.customerList = res.data;
      });
  }
}
