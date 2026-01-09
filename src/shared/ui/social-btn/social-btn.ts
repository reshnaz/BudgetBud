import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-social-btn',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './social-btn.html',
  styleUrl: './social-btn.scss'
})
export class SocialBtn {

}
