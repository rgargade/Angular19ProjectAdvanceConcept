import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { VariablesComponent } from './components/variables/variables.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { ControlFlowStatementComponent } from './components/control-flow-statement/control-flow-statement.component';
import { AttributeDirComponent } from './components/attribute-dir/attribute-dir.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { GetApiCallComponent } from './components/get-api-call/get-api-call.component';
import { UserComponent } from './components/user/user.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { BulkuploadComponent } from './components/bulkupload/bulkupload.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:"login",
    component:LoginComponent,
    title:'Login'
  },
  {
    path:'',
    component:LayoutComponent,
    canActivate:[authGuard],
    children:[
      {
        path:"Variable",
        component:VariablesComponent,
        title:'Variable',
      },
      {
         path:'Structural',
         component:StructuralDirComponent,
         title:'Structural',
      },
      {
        path:'ControlFLowStatement',
        component:ControlFlowStatementComponent,
        title:'Control Flow',
      },
      {
        path:'AttributeDirective',
        component:AttributeDirComponent,
        title:'Attribute Directive'
      },
      {
        path:'PipeComponent',
        component:PipeComponent,
        title:'Pipe Component'
      },
      {
        path:'GetAPI',
        component:GetApiCallComponent,
        title:'GET API'
      },
      {
        path:'User',
        component:UserComponent,
        title:'User'
      },
      {
        path:'Venodr',
        component:VendorComponent,
        title:'Vendor'
      },
      {
        path:"bulkupload",
        component:BulkuploadComponent,
        title:'Bulk Update'
      },
      {
        path:"dashboard",
        component:DashboardComponent,
        title:'Dashboard'
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];
