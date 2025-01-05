import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// moduels
import { MatGridListModule } from "@angular/material/grid-list";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';

//components
import { IndMapComponent } from "../ind-map/ind-map.component";
import { LiveFeedComponent } from "../live-feed/live-feed.component";
import { MetaDataComponent } from "../meta-data/meta-data.component";
import { CommonModule } from "@angular/common";
import { VideoStreamService } from "../../services/video-stream.service";

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
  ],
  providers: [VideoStreamService],
  templateUrl: "./live-feed-wrapper.component.html",
  styleUrl: "./live-feed-wrapper.component.css",
})
export class LiveFeedWrapperComponent implements OnInit {
  selectedSensor: { name: string; data: string } | null = null;

  videoStreamUrl: string = "http://127.0.0.1:1000/api/video_feed"; // Replace with your API endpoint

  ngOnInit() {}

  selectSensor(sensor: { name: string; data: string }) {
    this.selectedSensor = sensor;
  }
}
