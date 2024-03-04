import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent {
  title = 'crm-frontend';
  href: string = '';
  showSidebar: boolean = true;

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
