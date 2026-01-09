import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-btn',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './edit-btn.html',
  styleUrl: './edit-btn.scss'
})
export class EditBtn {

}
