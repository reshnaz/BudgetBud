import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-authForm',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './authForm.html',
  styleUrl: './authForm.scss',
})
export class AuthForm {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
