import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { VariablesComponent } from './components/variables/variables.component';
import { BtnGroupComponent } from './ReusableComponents/btn-group/btn-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardComponent,
    EmployeeComponent,
    VariablesComponent,
    RouterLink,
    BtnGroupComponent,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular_Project_Practice';
}
