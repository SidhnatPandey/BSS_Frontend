import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Navbar/navbar.component';
import { SidebarComponent } from '../Sidebar/sidebar.component';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [FontAwesomeModule, CommonModule, RouterOutlet, NavbarComponent, SidebarComponent]
})

export class DashboardComponent {
  
}