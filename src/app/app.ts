import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './structure/sidebar/sidebar';
import { Layout } from './structure/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Budget Bud');
}
