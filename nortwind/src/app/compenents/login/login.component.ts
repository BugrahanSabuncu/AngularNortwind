import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService:ToastrService

  ) {}
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createLoginForm();
  }
  login() {
    let loginModel=Object.assign({},this.loginForm.value)
    if (this.loginForm.valid) {      
      this.authService.login(loginModel).subscribe(responce => {
        //console.log(responce);
        this.toastrService.info(responce.message)
        localStorage.setItem("token",responce.data.token)
      },errorResponce => {
        //console.log(errorResponce);
        this.toastrService.error(errorResponce.error)
      });     
      
    }
  }
}
