import { AuthService } from './auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
  }

  public onSubmit(): void {
    this.loginValid = true;

    this.authService.authenticate(this.username, this.password).subscribe({
      next: (response) => {
        const token = response.token;
        sessionStorage.setItem('token', token);
        this.router.navigate(['/nova-playlist']);
      }, 
      error: (error) => { 
        console.error('falha na autenticação', error);
        this.loginValid = false;
      }
    })


  }
}

