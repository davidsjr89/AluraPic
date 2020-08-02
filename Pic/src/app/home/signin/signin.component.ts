import { PlatformDetectorService } from './../../core/plataform-detector/platform-detector.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router
                , private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        return this.authService.authenticate(userName, password).subscribe(() =>
        this.route.navigate(['user', userName]),
        err => {
            console.log(err);
            this.loginForm.reset();
            this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
            alert('Invalid user name or password');
        }
        );
    }
}
