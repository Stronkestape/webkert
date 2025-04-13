import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-signup',
  standalone : true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
    
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name : new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('', [Validators.required])
    
});

error = '';
constructor(private router: Router) {}

signup(): void {
  if (this.signUpForm.invalid) {
    this.error = 'Please correct the form errors before submitting.';
    return;
  }

  const password = this.signUpForm.get('password');
  const rePassword = this.signUpForm.get('rePassword');

  if (password?.value !== rePassword?.value) {
    return;
  }



  const newUser: User = {
    name: this.signUpForm.value.name || '',
    email: this.signUpForm.value.email || '',
    password: this.signUpForm.value.password || '',
    passports: [],
    appointments: []
  };

  newUser;

  setTimeout(() => {
    this.router.navigateByUrl('/home');
  }, 2000);
}



}
