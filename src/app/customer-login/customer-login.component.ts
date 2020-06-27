import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../helpers/must-match-validators';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
   private apiService : ApiServicesService,
   private router: Router,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

loginSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.router.navigate(["/customerDetails"]);
    // this.apiService.postData("/getlogintoken.json",this.loginForm.value).then(res =>{
    //   console.log("check for the responce",res);
    //   if(res['code'] == 200){
    //     alert("Login Successfully.");
    //     this.router.navigate(["/customerDetails"]);
    //   }
      
    // },err=>{
    //   alert("Something went wrong ,Please try after sometime.")
    //   console.error(err);
    // });
    // display form values on success
    console.log("check for the data",this.loginForm.value);
    
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.loginForm.reset();
}
}
