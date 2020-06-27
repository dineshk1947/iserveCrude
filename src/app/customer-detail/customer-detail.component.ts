import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  users: [];
  constructor( private apiService : ApiServicesService,
    private router :Router) { }

  ngOnInit(): void {
  }
  addUser(){
    this.router.navigate(["/addCustomer"]);
    // let data ={}
    //  this.apiService.postData("/getlogintoken.json",data).then(res =>{
    //   console.log("check for the responce",res);
    //   if(res['code'] == 200){
    //     alert("Login Successfully.");
    //     this.router.navigate(["/addCustomer"]);
    //   }
      
    // },err=>{
    //   alert("Something went wrong ,Please try after sometime.")
    //   console.error(err);
    // });
  }
  deleteUser(user){
      this.apiService.deleteData('').then(res =>{
      },
        err=>{

      });
  }
  editUser(user){
    this.router.navigate(["/customerEdit"]);
    // let data ={}
    // this.apiService.editData('',data).then(res=>{

    // },err=>{

    // })
  }

}
