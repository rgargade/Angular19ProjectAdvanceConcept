import { HttpClient} from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bulkupload',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bulkupload.component.html',
  styleUrl: './bulkupload.component.css'
})
export class BulkuploadComponent implements OnInit{

  http:HttpClient = inject(HttpClient);
  departmentList:any[]=[];

  


  ngOnInit(): void {
      this.getParentDepartments();
  }

  getParentDepartments(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.departmentList = res.data;
    })
  }

  addNewDept(){
    const deptObj ={
      departmentId:0,
      departmentName:"",
      departmentLogo:''
    }

    this.departmentList.unshift(deptObj)

  }

  bulkUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddBulkDepartment",this.departmentList).subscribe((res:any)=>{
      if(res.result){
        alert("Data Added / Updated Success");
      }else{
        alert("Something went wrong");
      }
    })
  }


}
