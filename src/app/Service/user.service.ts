import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) {
  
  }

  getAllUsers(){
   return this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers");
  }

  createNewUser(userObj:any){
    return this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",userObj);
  }
  
}
