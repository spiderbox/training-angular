import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      console.log(res)
      this.loginService.setFlagLogin(true);
      this.router.navigate(['/employee'])
    }, (error: any) => {
      console.log(error);
    })
  }
}
