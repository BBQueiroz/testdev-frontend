import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginValid = true;
  public username = '';
  public password = '';

 

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
  }

  public onSubmit(): void {
  
  }
}

