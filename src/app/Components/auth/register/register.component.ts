import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide:boolean=true;
  response:any;
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  registerForm:FormGroup= new FormGroup({
    'first_name':new FormControl(null,[Validators.required]),
    'last_name':new FormControl(null,[Validators.required]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required]),
  })
  ngOnInit(): void {
    console.log(this.registerForm.controls)
  }
  get f()
  {
    return this.registerForm.controls;
  }
  register(){
    if(this.registerForm.invalid){return}
    this._AuthService.registerData(this.registerForm.value).subscribe({
      next:(data:any)=>{
        this.response = data;
        if(data.message=="success"){
          this._Router.navigateByUrl("/login")
        }
      }
    // ,error(err:any){console.log(err)}
  })
  }
}
