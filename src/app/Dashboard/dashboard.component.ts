import { Component, OnInit } from "@angular/core";
import { SidebarComponent } from "../Sidebar/sidebar.component";

import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "../components/header/header.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
  imports: [
    FontAwesomeModule,
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    MatCardModule,
    MatIconModule,
  ],
})
export class DashboardComponent {
  photos = [
    {
      label: "BSS 1",
      url: "assets/bss/photo1.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 2",
      url: "assets/bss/photo2.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 3",
      url: "assets/bss/photo3.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 4",
      url: "assets/bss/photo4.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 5",
      url: "assets/bss/photo5.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 6",
      url: "assets/bss/photo6.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
  ];
  alertCount = 0;
  activeAlertIndex: number | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startRefreshTimer();
    // Delay the alert by 10 seconds (10000 milliseconds)
    setTimeout(() => {
      this.activeAlertIndex = 2; // Index of the card where the alert should appear
      this.alertCount++;
    }, 8000);
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

  navigateToLiveFeed(photo: any): void {
    // Navigate to /live-feed with optional query parameters or state
    this.router.navigate(["/live-feed"], {
      queryParams: { location: photo.label },
    });
  }
}
