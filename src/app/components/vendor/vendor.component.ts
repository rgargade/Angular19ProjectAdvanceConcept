import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BtnGroupComponent } from '../../ReusableComponents/btn-group/btn-group.component';

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BtnGroupComponent],
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css',
})
export class VendorComponent implements OnInit {
  http = inject(HttpClient);
  vendorList: any[] = [];
  isVendorSuccess: string = '';
  myBtnList: string[] = ['Vendors List', 'New Vendor Form'];
  selectedTabName: string = '';

  vendorObj = {
    vendorId: 0,
    vendorName: '',
    contactNo: '',
    emailId: '',
  };

  vendorForm: FormGroup = new FormGroup({
    vendorId: new FormControl(0),
    vendorName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    contactNo: new FormControl(''),
    emailId: new FormControl('', [
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    this.getVendor();
  }

  getVendor() {
    this.http
      .get('https://projectapi.gerasim.in/api/BusBooking/GetBusVendors')
      .subscribe(
        (res: any) => {
          this.vendorList = res;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  EditUser(vendor: any) {
    this.vendorForm = new FormGroup({
      vendorId: new FormControl(vendor.vendorId),
      vendorName: new FormControl(vendor.vendorName),
      contactNo: new FormControl(vendor.contactNo),
      emailId: new FormControl(vendor.emailId),
    });
  }

  onResetVendor() {
    this.vendorForm = new FormGroup({
      vendorId: new FormControl(0),
      vendorName: new FormControl(''),
      contactNo: new FormControl(''),
      emailId: new FormControl(''),
    });
  }

  DeleteUser(data: any) {
    debugger;
    this.http
      .delete(
        `https://projectapi.gerasim.in/api/BusBooking/DeleteUserByUserId?userId=${data.vendorId}`
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Vendor deleted successfully');
        }
      });
  }

  onSaveVendor() {
    const formValue = this.vendorForm.value;
    this.http
      .post(
        'https://projectapi.gerasim.in/api/BusBooking/PostBusVendor',
        formValue
      )
      .subscribe(
        (res: any) => {
          //alert("vendor created successfully");
          this.getVendor();
          this.isVendorSuccess = 'success';
          setTimeout(() => {
            this.isVendorSuccess = '';
          }, 4000);
        },
        (error) => {
          // alert("Api call error");
          this.isVendorSuccess = 'Fail';
          setTimeout(() => {
            this.isVendorSuccess = '';
          }, 4000);
        }
      );
  }

  onTabChange(selectedBtnName: string) {
    this.selectedTabName = selectedBtnName;
  }
}
