import { CanActivate } from '@angular/router'
import { Injectable } from '@angular/core';
import { LoginService } from './login.service'
import { Router } from '@angular/router';

@Injectable()

export class LoginAuth implements CanActivate {

    constructor(
        private loginService: LoginService,
        private router: Router,
    ) {

    }

    canActivate() {
        if (!this.loginService.getFlagLogin()) {
            this.router.navigate(['/'])
            return false
        }
        return true;
    }
}