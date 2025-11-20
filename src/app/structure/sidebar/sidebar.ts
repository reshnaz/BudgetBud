import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import {MatDividerModule} from '@angular/material/divider';
import { Component } from '@angular/core';

@Component({
  imports: [CdkMenu, CdkMenuItem, MatDividerModule],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

}
