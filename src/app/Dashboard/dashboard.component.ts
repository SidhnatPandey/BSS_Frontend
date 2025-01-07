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
    { label: 'BSS 1', url: 'assets/bss/photo1.jpg', lastUpdate: 0 },
    { label: 'BSS 2', url: 'assets/bss/photo2.jpg', lastUpdate: 0 },
    { label: 'BSS 3', url: 'assets/bss/photo3.jpg', lastUpdate: 0 },
    { label: 'BSS 4', url: 'assets/bss/photo4.jpg', lastUpdate: 0 },
    { label: 'BSS 5', url: 'assets/bss/photo5.jpg', lastUpdate: 0 },
    { label: 'BSS 6', url: 'assets/bss/photo6.jpg', lastUpdate: 0 },
  ];

  activeAlertIndex: number | null = null; // Initially no alert

  ngOnInit(): void {
    this.startRefreshTimer();
    // Delay the alert by 10 seconds (10000 milliseconds)
    setTimeout(() => {
      this.activeAlertIndex = 3; // Index of the card where the alert should appear
    }, 10000);
  }

  startRefreshTimer(): void {
    setInterval(() => {
      this.photos.forEach((photo) => {
        photo.lastUpdate++;
        if (photo.lastUpdate > 15) {
          photo.lastUpdate = 0; // Reset after 15 seconds
        }
      });
    }, 1000); // Increment every second
  }
}
