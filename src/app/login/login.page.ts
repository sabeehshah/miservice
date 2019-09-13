import { DbService } from './../services/db.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;
 

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private db: DbService,
    private router: Router
  ) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }

  get email(){
    return this.myForm.get('email')
  }

  get password(){
    return this.myForm.get('password')
  }

  login(){
    this.auth.loginWithEmailAndPassword(this.email.value,this.password.value)
    this.router.navigate(['home']);
    console.log("logged in successfully")
    
  }

}
