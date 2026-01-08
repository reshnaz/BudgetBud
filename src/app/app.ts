import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './structure/sidebar/sidebar';
import { Layout } from './structure/layout/layout';
import { Login } from "./login/login";
import { AccountGrid } from '../shared/ui/account-grid/account-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountGrid],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BudgetBud');
}
