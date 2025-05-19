import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:Login = new Login();
  router:Router = inject(Router)
  http:HttpClient = inject(HttpClient)

onLogin(){

// using API login => Adding new user record in Db Using Post Api 
/*
this.http.post("https://projectapi.gerasim.in/api/BankLoan/login",this.loginObj).subscribe((res:any)=>{
  if(res.result){
    sessionStorage.setItem('username',JSON.stringify(res.data));
    this.router.navigateByUrl('Structural');
  } else {
    alert("user Name or password is Wrong");
  }
})
*/

// Using Hard code user login

   if(this.loginObj.username=="admin@gmail.com" && this.loginObj.password=="admin@123"){
      this.router.navigateByUrl('Structural');
      debugger;
      sessionStorage.setItem('username',this.loginObj.username);
     
      console.log(sessionStorage.getItem('username'))
    } else {
      alert("Wrong Credential");
    }
  }





}

class Login {
  username:string;
  password:string;

  constructor(){
    this.username = "";
    this.password = "";
  }
}