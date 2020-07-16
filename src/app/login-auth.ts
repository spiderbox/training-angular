import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core';
import { LoginService } from './login.service'

@Injectable()

export class LoginAuth implements CanActivate {

    isLogin: any
    constructor(private loginService: LoginService) {

    }

    canActivate() {
        this.loginService.getFlagLogin().subscribe((data) => this.isLogin = data)
        return this.isLogin
    }
}