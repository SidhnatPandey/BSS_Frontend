import { Component, OnInit } from "@angular/core";
import { SidebarComponent } from "../Sidebar/sidebar.component";

import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "../components/header/header.component";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
  imports: [FontAwesomeModule, CommonModule, SidebarComponent, HeaderComponent, MatCardModule, MatIconModule],
})
export class DashboardComponent {
  photos = [
    { label: 'BSS 1', url: 'assets/bss/photo1.jpg' },
    { label: 'BSS 2', url: 'assets/bss/photo2.jpg' },
    { label: 'BSS 3', url: 'assets/bss/photo3.jpg' },
    { label: 'BSS 4', url: 'assets/bss/photo4.jpg' },
    { label: 'BSS 5', url: 'assets/bss/photo5.jpg' },
    { label: 'BSS 6', url: 'assets/bss/photo6.jpg' },
  ];

  activeAlertIndex = 3; // Index of the card with the alert overlay

}
