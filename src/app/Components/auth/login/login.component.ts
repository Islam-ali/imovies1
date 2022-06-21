import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean=true;
  response:any;
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  loginForm:FormGroup= new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required]),
  })
  ngOnInit(): void {
  }
  get f()
  {
    return this.loginForm.controls;
  }
  login(){
    if(this.loginForm.invalid){return}
    this._AuthService.loginData(this.loginForm.value).subscribe({
      next:(data:any)=>{
        this.response = data;
        console.log( this.response)
        if(data.message =="success"){
          localStorage.setItem('token','true')
          this._Router.navigateByUrl("/")
        }
      }
    // ,error(err:any){console.log(err)}
  })
  }
}
