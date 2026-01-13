import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressGauge } from '../shared/ui/progress-gauge/progress-gauge';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProgressGauge],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BudgetBud');
}
