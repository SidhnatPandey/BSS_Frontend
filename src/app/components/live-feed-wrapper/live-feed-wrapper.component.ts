import { Component, OnInit } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { IndMapComponent } from "../ind-map/ind-map.component";
import { LiveFeedComponent } from "../live-feed/live-feed.component";
import { MetaDataComponent } from "../meta-data/meta-data.component";
import { CommonModule } from "@angular/common";
import { VideoStreamService } from "../../services/video-stream.service";
import { JsonPipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: "app-live-feed-wrapper",
  standalone: true,
  imports: [
    HttpClientModule,
    MatCardModule,
    CommonModule,
    MatGridListModule,
    DragDropModule,
    IndMapComponent,
    LiveFeedComponent,
    MetaDataComponent,
    JsonPipe,
    MatButtonModule,
    HeaderComponent,
  ],
  providers: [VideoStreamService],
  templateUrl: "./live-feed-wrapper.component.html",
  styleUrls: ["./live-feed-wrapper.component.css"], // Corrected styleUrls
})
export class LiveFeedWrapperComponent implements OnInit {
  selectedSensor: { name: string; data: string } | null = null;
  metaData: any[] = [];

  videoStreamUrl: string = "http://127.0.0.1:1000/api/video_feed";
  videoStreamUrlRajak: string = "http://127.0.0.1:1000/api/thermal_video_feed";
  videoStreamUrlPtz: string = "http://127.0.0.1:1000/api/video_feed";
  videoStreamUrlHhti: string = "http://127.0.0.1:1000/api/ptz_video_feed";

  private intervalId: any;

  constructor(private videoStreamService: VideoStreamService) {}

  ngOnInit() {
    // Initial call to fetch metadata
    this.fetchMetaData();

    // Set up periodic updates
    this.intervalId = setInterval(() => {
      this.fetchMetaData();
    }, 1000); // Adjust the interval as needed (1000ms = 1 second)
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  fetchMetaData() {
    this.videoStreamService.getMetaData().subscribe((data: any[]) => {
      this.metaData = data;
    });
  }

  selectSensor(sensor: { name: string; data: string }) {
    this.selectedSensor = sensor;
    if (sensor.name === "RAJAK") {
      this.videoStreamUrl = this.videoStreamUrlRajak;
    } else if (sensor.name === "PTZ") {
      this.videoStreamUrl = this.videoStreamUrlPtz;
    } else if (sensor.name === "HHT1") {
      this.videoStreamUrl = this.videoStreamUrlHhti;
    }
  }
}
