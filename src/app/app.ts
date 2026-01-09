import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditBtn } from '../shared/ui/edit-btn/edit-btn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EditBtn],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BudgetBud');
}
