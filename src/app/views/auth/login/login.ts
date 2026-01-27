import { RouterLink, RouterModule, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';

import {AuthService} from '../../../services/authService';
import {UserCredentials} from '../../../models/userCredentials';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: '../auth.css',
})
export class Login {
  private readonly router = inject(Router)
  private readonly auth = inject(AuthService)

  error = signal<string | null>(null)

  handleSubmit(username: string, password: string) {

        const credentials = new UserCredentials({ username, password })

        this.auth.logIn(credentials).subscribe( success => {
            if (success) {
                this.router.navigate(['/'])
            }
            else {
                this.error.set('Invalid credentials')
            }
        })

    }
}
