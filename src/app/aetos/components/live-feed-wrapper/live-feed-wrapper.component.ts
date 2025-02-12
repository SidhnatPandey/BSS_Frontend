import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { interval, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatCardModule } from "@angular/material/card";
import { LiveFeedComponent } from "../live-feed/live-feed.component";
import { CommonModule } from "@angular/common";
import { JsonPipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MissionControlComponent } from "../mission-control/mission-control.component";
import { MetaDataComponent } from "../meta-data/meta-data.component";
import { MapComponent } from "../map/map.component";
import { SseClient } from 'ngx-sse-client';

interface Alert {
  id: number;
  message: string;
  timestamp: string;
}

@Component({
  selector: "app-live-feed-wrapper",
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatGridListModule,
    LiveFeedComponent,
    JsonPipe,
    MatButtonModule,
    MissionControlComponent,
    MetaDataComponent,
    MapComponent
  ],
  templateUrl: "./live-feed-wrapper.component.html",
  styleUrls: ["./live-feed-wrapper.component.css"],
})
export class LiveFeedWrapperComponent implements OnInit, OnDestroy {
  alerts: Alert[] = [];
  private alertSubscription!: Subscription;
  private apiUrl = "http://127.0.0.1:1000/api/alerts";
  // currentTime: string;
  // oneMinuteBefore: string;

  constructor(private sseClient: SseClient) {
    // const now = new Date();
    // this.currentTime = now.toISOString(); 

    // const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
    // this.oneMinuteBefore = oneMinuteAgo.toISOString();
  }

  ngOnInit(): void {
    // Fetch notifications through sse events
    const headers = new HttpHeaders();
    this.sseClient.stream(this.apiUrl, { keepAlive: true, reconnectionDelay: 1_000, responseType: 'event' }, { headers }, 'GET').subscribe((event) => {
      if (event.type === 'error') {
        const errorEvent = event as ErrorEvent;
        console.error(errorEvent.error, errorEvent.message);
      } else {
        const messageEvent = event as MessageEvent;
        this.alerts.push(messageEvent.data);
        console.info(`SSE request with type "${messageEvent.type}" and data "${messageEvent.data}"`);
      }
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
