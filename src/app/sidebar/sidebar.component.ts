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
    this.loginService.getFlagLogin().subscribe((data) => this.isLogin = data)
    console.log("SideBar::ngOnInit")
     
  }

  logout(): void {
    this.loginService.setFlagLogin(false)
    this.router.navigate([ROUTE.HOME]) 
  }

}
