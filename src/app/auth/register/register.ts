import { RouterLink } from '@angular/router';

import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm, AbstractControl, ReactiveFormsModule, Validators, ValidationErrors} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-register',
  imports: [JsonPipe, RouterModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: '../auth.css',
})
export class Register {
  private readonly router = inject(Router)

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
            this.router.navigate(['/'])
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
