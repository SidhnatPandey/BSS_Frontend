import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClient } from "@angular/common/http";
import { interval, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatCardModule } from "@angular/material/card";
import { IndMapComponent } from "../ind-map/ind-map.component";
import { LiveFeedComponent } from "../live-feed/live-feed.component";
import { MetaDataComponent } from "../meta-data/meta-data.component";
import { CommonModule } from "@angular/common";
import { JsonPipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from "../header/header.component";
import { MissionControlComponent } from "../mission-control/mission-control.component";
import { SidebarComponent } from "../../Sidebar/sidebar.component";

interface Alert {
  id: number;
  message: string;
  timestamp: string; // Or Date if you parse it
}

@Component({
  selector: "app-live-feed-wrapper",
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatGridListModule,
    IndMapComponent,
    LiveFeedComponent,
    MetaDataComponent,
    JsonPipe,
    MatButtonModule,
    HeaderComponent,
    MissionControlComponent,
    SidebarComponent,
  ],
  templateUrl: "./live-feed-wrapper.component.html",
  styleUrls: ["./live-feed-wrapper.component.css"], // Corrected styleUrls
})
export class LiveFeedWrapperComponent implements OnInit, OnDestroy {
  alerts: Alert[] = [];
  private alertSubscription!: Subscription;
  private apiUrl = "http://127.0.0.1:8000/api/alerts/bss1"; // Replace with your actual API endpoint
  currentTime: string;
  oneMinuteBefore: string;

  constructor(private http: HttpClient) {
    const now = new Date();
    this.currentTime = now.toISOString(); // Current time in ISO format

    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000); // Subtract 1 minute (60 seconds * 1000 milliseconds)
    this.oneMinuteBefore = oneMinuteAgo.toISOString();
  }

  ngOnInit(): void {
    // Fetch notifications every 10 seconds
    this.alertSubscription = interval(10000)
      .pipe(switchMap(() => this.http.get<Alert[]>(this.apiUrl)))
      .subscribe((newAlerts) => {
        // Add new notifications to the stack
        this.alerts.push(...newAlerts);
      });
  }

  dismissAlert(alertId: number): void {
    this.alerts = this.alerts.filter((alert) => alert.id !== alertId);
  }

  ngOnDestroy(): void {
    // Clean up the subscription
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }
}
