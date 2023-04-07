import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  constructor(private router: Router) {}

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ])
  });

  nav() {
    this.router.navigate(['/user_management'])
  }
  register(){
    this.router.navigate(['/register'])
  }

  public get _fControls() {
    return this.authForm.controls;
  }
  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
  }
}
