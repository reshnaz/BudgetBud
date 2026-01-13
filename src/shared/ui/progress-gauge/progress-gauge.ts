import { Component} from '@angular/core';
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-progress-gauge',
  imports: [RoundProgressModule],
  providers: [{
    provide: ROUND_PROGRESS_DEFAULTS,
    useValue: {
      color: '#f00',
      background: '#0f0'
    }
  }],
  templateUrl: './progress-gauge.html',
  styleUrl: './progress-gauge.scss'
})
export class ProgressGauge {
  current = 85;
  max = 100;
}
