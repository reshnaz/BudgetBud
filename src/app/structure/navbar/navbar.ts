import { Component } from '@angular/core';
import { SearchBar } from '../../../shared/ui/search-bar/search-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [SearchBar, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
