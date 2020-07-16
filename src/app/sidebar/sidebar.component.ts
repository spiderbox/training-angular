import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLogin: Boolean
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getFlagLogin().subscribe((data) => this.isLogin = data)
    console.log(this.isLogin)
  }

}
