import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core';
import { LoginService } from './login.service'

@Injectable()

export class LoginAuth implements CanActivate {

    constructor(private loginService: LoginService) {

    }

    canActivate() {
        return this.loginService.getFlagLogin()
    }
}