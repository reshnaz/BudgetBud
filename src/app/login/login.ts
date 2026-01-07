import { Component } from '@angular/core';
import { AuthForm } from "../../shared/ui/authForm/authForm";

@Component({
  selector: 'app-login',
  imports: [AuthForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
}
