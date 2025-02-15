import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SseClient } from 'ngx-sse-client';

@Component({
  selector: 'app-meta-data',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './meta-data.component.html',
  styleUrl: './meta-data.component.css'
})
export class MetaDataComponent implements OnInit {

  currentTime: string | undefined;
  oneMinuteBefore: string | undefined;
  private apiUrl = "https://bssbackend.test.devapp.nyc1.initz.run/api/metadata";
  metadata: any = [];

  constructor(private sseClient : SseClient) {
    const now = new Date();
    this.currentTime = now.toISOString(); // Current time in ISO format

    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000); // Subtract 1 minute (60 seconds * 1000 milliseconds)
    this.oneMinuteBefore = oneMinuteAgo.toISOString();
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
          this.metadata = messageEvent.data;
          console.info(`SSE request with type "${messageEvent.type}" and data "${messageEvent.data}"`);
        }
      });
    }
}
