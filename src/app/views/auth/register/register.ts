import { RouterLink } from '@angular/router';

import {Component, inject, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm, AbstractControl, ReactiveFormsModule, Validators, ValidationErrors} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ErrorStateMatcher} from '@angular/material/core';

import {AuthService} from '../../../services/authService';
import {UserCredentials} from '../../../models/userCredentials';

@Component({
  selector: 'app-register',
  imports: [JsonPipe, RouterModule, RouterLink, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: '../auth.css',
})
export class Register {
  private readonly router = inject(Router)
  private readonly auth = inject(AuthService)

  error = signal<string | null>(null)

  passwordControl = new FormControl('', [Validators.required])
  passwordConfirmationControl = new FormControl('', [Validators.required])

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
        password: this.passwordControl,
        passwordConfirmation: this.passwordConfirmationControl
    }, [this.passwordMatch])

    confirmationMatcher = new ConfirmationMatcher()

    private passwordMatch(form: AbstractControl): ValidationErrors | null {

        if (form.value?.password != form.value?.passwordConfirmation) {
            return { passwordConfirmationMustMatch: true };
        } else {
            return null
        }
    }

    get usernameControl(): FormControl {
        return this.registerForm.get('username') as FormControl
    }

    handleSubmit() {

        if (this.registerForm.valid) {
            console.log(this.registerForm.value)
            const { username, password } = this.registerForm.value
            const credentials = new UserCredentials({ username: username!, password: password! })

            this.auth.signUp(credentials).subscribe( success => {
                if (success) {
                    this.router.navigate(['/'])
                }
                else {
                    this.error.set('Could not create account')
                }
            })
        }

    }
}

class ConfirmationMatcher implements ErrorStateMatcher {
    // Pour lier l'affichage de l'erreur sur le FORM avec le CONTROL

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;

        return !!(
            control
            && (control.invalid || form?.hasError('passwordConfirmationMustMatch')) // FORM 
            && (control.dirty || control.touched || isSubmitted)
        );
    }
}
