import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { datamodel } from '../../../model';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  employeeform!:FormGroup;
  data:any;
    constructor(private formBuilder:FormBuilder,private api:ApiService){}     
  ngOnInit(): void {
         this.employeeform = this.formBuilder.group({
          name:[''],
          password:[''],
          city:['']
         })
         this.getEmployee();
       }
       addEmployee(data:datamodel){
        this.api.post(data).subscribe((res=>{
          this.getEmployee();
          this.employeeform.reset();
        }))
       }
       getEmployee(){
        this.api.get().subscribe((res=>{
          this.data = res;
        }))
       }
       deleteEmployee(id:number){
      this.api.delete(id).subscribe((res=>{
        alert("item deleted");
        this.getEmployee();
      }))
       }
  }
