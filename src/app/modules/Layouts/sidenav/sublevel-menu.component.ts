import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0"
    [@submenu]="expanded
      ? {value: 'visible', 
          params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}}
      : {value: 'hidden', 
          params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}"
      class="sublevel-nav"
    >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
          <a class="sublevel-nav-link"
          (click)="handleClick(item)"
            *ngIf="item.items && item.items.length > 0"
            [ngClass]="getActiveClass(item)"
          >
            <i class="sublevel-link-icon fa fa-circle "></i>
            <span class="sublevel-link-text" @fadeInOut 
                *ngIf="collapsed">{{item.label}}</span>
            <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
              [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"
            ></i>
          </a>
          <a class="sublevel-nav-link px-1"
            *ngIf="!item.items || (item.items && item.items.length === 0)"
            [routerLink]="[item.routeLink]"
            routerLinkActive="active-sublevel"
            [routerLinkActiveOptions]="{exact: true}"
          >
            <!-- <i class="sublevel-link-icon fa fa-circle"></i> -->
            <img class="sidenav-link-icon " [src]="item.icon"  style="height: 20px ; width: 20px;"/>
            <span class="sublevel-link-text" @fadeInOut 
               *ngIf="collapsed">{{item.label}}</span>
          </a>

          <div class="text-[15px] my-3" >CUSTOMERS</div>

          <div *ngFor="let item of data.secondItems" class="sublevel-nav-item">
          <a class="sublevel-nav-link"
          (click)="handleClick(item)"
            *ngIf="item.items && item.items.length > 0"
            [ngClass]="getActiveClass(item)"
          >
            <i class="sublevel-link-icon fa fa-circle "></i>
            <span class="sublevel-link-text" @fadeInOut 
                *ngIf="collapsed">{{item.label}}</span>
            <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
              [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"
            ></i>
          </a>
          <a class="sublevel-nav-link px-1"
            *ngIf="!item.items || (item.items && item.items.length === 0)"
            [routerLink]="[item.routeLink]"
            routerLinkActive="active-sublevel"
            [routerLinkActiveOptions]="{exact: true}"
          >
            <!-- <i class="sublevel-link-icon fa fa-circle"></i> -->
            <img class="sidenav-link-icon " [src]="item.icon"  style="height: 20px ; width: 20px;"/>
            <span class="sublevel-link-text" @fadeInOut 
               *ngIf="collapsed">{{item.label}}</span>
          </a>
          </div>

          <div class="text-[15px] my-3" >BUSINESSES</div>

          <div *ngFor="let item of data.thirdItems" class="sublevel-nav-item">
          <a class="sublevel-nav-link"
          (click)="handleClick(item)"
            *ngIf="item.items && item.items.length > 0"
            [ngClass]="getActiveClass(item)"
          >
            <i class="sublevel-link-icon fa fa-circle "></i>
            <span class="sublevel-link-text" @fadeInOut 
                *ngIf="collapsed">{{item.label}}</span>
            <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
              [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"
            ></i>
          </a>
          <a class="sublevel-nav-link px-1"
            *ngIf="!item.items || (item.items && item.items.length === 0)"
            [routerLink]="[item.routeLink]"
            routerLinkActive="active-sublevel"
            [routerLinkActiveOptions]="{exact: true}"
          >
            <!-- <i class="sublevel-link-icon fa fa-circle"></i> -->
            <img class="sidenav-link-icon " [src]="item.icon"  style="height: 20px ; width: 20px;"/>
            <span class="sublevel-link-text" @fadeInOut 
               *ngIf="collapsed">{{item.label}}</span>
          </a>
          </div>
          
          <div class="text-[15px] my-3" >SETTINGS</div>

          <div *ngFor="let item of data.fourthItems" class="sublevel-nav-item">
          <a class="sublevel-nav-link"
          (click)="handleClick(item)"
            *ngIf="item.items && item.items.length > 0"
            [ngClass]="getActiveClass(item)"
          >
            <i class="sublevel-link-icon fa fa-circle "></i>
            <span class="sublevel-link-text" @fadeInOut 
                *ngIf="collapsed">{{item.label}}</span>
            <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
              [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"
            ></i>
          </a>
          <a class="sublevel-nav-link px-1"
            *ngIf="!item.items || (item.items && item.items.length === 0)"
            [routerLink]="[item.routeLink]"
            routerLinkActive="active-sublevel"
            [routerLinkActiveOptions]="{exact: true}"
          >
            <!-- <i class="sublevel-link-icon fa fa-circle"></i> -->
            <img class="sidenav-link-icon " [src]="item.icon"  style="height: 20px ; width: 20px;"/>
            <span class="sublevel-link-text" @fadeInOut 
               *ngIf="collapsed">{{item.label}}</span>
          </a>
          </div>

          <div *ngIf="item.items && item.items.length > 0">
            <app-sublevel-menu
              [data]="item"
              [collapsed]="collapsed"
              [multiple]="multiple"
              [expanded]="item.expanded"
            ></app-sublevel-menu>
          </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}), 
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: [],
    secondItems: []
  }
  
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
  // secondItems: any;

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for(let modelItem of this.data.items) {
          if (item !==modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routeLink) 
      ? 'active-sublevel' 
      : '';
  }

}
