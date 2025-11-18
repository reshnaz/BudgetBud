import { CdkMenu, CdkMenuItem, CdkMenuModule } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  imports: [CdkMenu, CdkMenuItem],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

}
