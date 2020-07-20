import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ROUTE } from '../config/constants'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLogin: Boolean
  route: any = ROUTE
  constructor(
    private loginService: LoginService, 
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.loginService.getFlagLoginObs().subscribe((data) => this.isLogin = data)

    // get flagLogin in localStorage
    let isLoginLocalStorage = this.loginService.getFlagLogin();
    this.isLogin = isLoginLocalStorage ? isLoginLocalStorage : this.isLogin
    console.log("SideBar::ngOnInit")
     
  }

  logout(): void {
    localStorage.removeItem('isLogin')
    this.loginService.setFlagLogin(false)
    this.router.navigate([ROUTE.HOME]) 
  }

}
