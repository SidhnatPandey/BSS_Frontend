import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../Navbar/navbar.component";
import { SidebarComponent } from "../Sidebar/sidebar.component";

import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LiveFeedWrapperComponent } from "../components/live-feed-wrapper/live-feed-wrapper.component";
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    LiveFeedWrapperComponent,
    HeaderComponent,
  ],
})
export class DashboardComponent {}
