import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Service/user.service';
import { BtnGroupComponent } from '../../ReusableComponents/btn-group/btn-group.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,UpperCasePipe,FormsModule,JsonPipe,BtnGroupComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  http = inject(HttpClient);
  userSrv = inject(UserService);
  userList:any[] = [];
  showLoader:boolean = false;
  isApiInprogress:boolean = false;
  userObj:User = new User();

  ngOnInit(): void {
     this.getUsers(); 
  }

  getUsers(){
    // this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((res:any)=>{
    //   this.userList = res.data;
    // })
    this.showLoader = true;
   
    this.userSrv.getAllUsers().subscribe((res:any)=>{
       this.userList  = res.data;
       this.showLoader = false;
    
    })
    

  }

  onSaveUser(){
    // this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",this.userObj).subscribe((res:any)=>{
    //   if(res.result){
    //     debugger;
    //     alert("Customer created successfully");
    //     this.getUsers();
    //   } else{
    //     alert(res.message)
    //   }
    // })
    if(this.isApiInprogress == false) {
      this.isApiInprogress = true;
      this.userSrv.createNewUser(this.userObj).subscribe((res:any)=>{
        if(res.result){
             
              alert("Customer created successfully");
              this.getUsers();
              this.isApiInprogress = false;
            } else{
              alert(res.message)
              this.isApiInprogress = false;
            }
      })
    }
  

   
}

  ResetUser(){
    this.userObj = {
    userId:0,
    userName: "",
    emailId: "",
    fullName: "",
    password: ""
    }
  }

  onEdit(data:any){
    this.userObj = data;
  }

  onUpdateUser(){
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/updateUser", this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert("User Updated Successfully");
        this.getUsers();
      } else {
        alert(res.message);
      }
    })

 }

  onDeleteUser(userId:any){

    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/BankLoan/DeleteUserByUserId?userId="
        +userId).subscribe((res:any)=>{
          if(res.result){
            alert("User Deleted Successfully");
            this.getUsers();
          }else{
            alert(res.message);
          }
        }
      )
    }
  }



}
