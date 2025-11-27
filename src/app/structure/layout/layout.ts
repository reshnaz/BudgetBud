import { Component } from '@angular/core';
import { Card } from '../../../shared/ui/card/card';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [Card, Navbar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
