import { DbService } from './../services/db.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  myForm: FormGroup;
  user: User = {
    name: '',
    email: '',
    createdDate: ''
  }
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private db: DbService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-A0-9]+)$')]]
    })

    // this.myForm.valueChanges.subscribe(console.log)
  }

  get name() {
    return this.myForm.get('name')
  }

  get email() {
    return this.myForm.get('email')
  }

  get password() {
    return this.myForm.get('password')
  }

  register() {
    this.user.name = this.myForm.get('name').value
    this.user.email = this.myForm.get('email').value
    this.user.createdDate = new Date().toLocaleString();

    console.log(this.user)

    this.auth.registerWithEmailAndPassword(this.myForm.get('email').value, this.myForm.get('password').value)
    this.db.updateAt("users", this.user)

    this.router.navigate(['home']);

  }

}
