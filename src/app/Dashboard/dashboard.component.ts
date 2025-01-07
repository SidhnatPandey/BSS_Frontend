import { Component, OnInit } from "@angular/core";
import { SidebarComponent } from "../Sidebar/sidebar.component";

import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
  imports: [FontAwesomeModule, CommonModule, SidebarComponent, HeaderComponent],
})
export class DashboardComponent {}
