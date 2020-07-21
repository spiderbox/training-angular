import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTE } from '../config/constants'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.loginService.getFlagLoginObs().subscribe((data) => this.isLogin = data)

    // get flagLogin in localStorage
    let isLoginLocalStorage = this.loginService.getFlagLogin();
    this.isLogin = isLoginLocalStorage ? isLoginLocalStorage : this.isLogin
     
  }

  logout(): void {
    localStorage.removeItem('isLogin')
    this.loginService.setFlagLogin(false)
    this.router.navigate([ROUTE.HOME]) 
  }

}
