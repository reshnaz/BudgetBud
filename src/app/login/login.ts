import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })
}
