import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  
  //router:Router = inject(Router)

  constructor(private router:Router){

  }

  onLogOff(){
    //this.router.navigateByUrl('login');
    // Same thing we can achieve with navigate
    this.router.navigate(['login']);
    debugger;
    sessionStorage.removeItem('username');
    
  }

}
