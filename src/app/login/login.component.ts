import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ROUTE } from '../config/constants'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError: boolean = false
  loginForm = this.formBuilder.group({
    email: ['son@gmail.com', [Validators.required]],
    password: ['2', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder, 
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  onSubmit(): void { 
    this.loginService.login(this.loginForm.value).subscribe((res: any) => {
      if (res.status == 200) {
        this.loginService.setFlagLogin(true);
        this.router.navigate([ROUTE.EMPLOYEE]) 
      } else {
        this.showError = true
      }
    }, (error: any) => {
      console.log(error);
    })
  }
  closeAlert(): void {
    this.showError = false
  }
}
