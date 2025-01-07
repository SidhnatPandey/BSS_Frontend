import { Component, OnInit } from "@angular/core";
import { SidebarComponent } from "../Sidebar/sidebar.component";

import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "../components/header/header.component";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
  imports: [FontAwesomeModule, CommonModule, SidebarComponent, HeaderComponent, MatCardModule, MatGridListModule],
})
export class DashboardComponent {

  constructor(private router: Router) {}

  nevigateToLiveFeed() {
    this.router.navigate(['/live-feed']);
  };
}
