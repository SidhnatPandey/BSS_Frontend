import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-live-feed",
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: "./live-feed.component.html",
  styleUrl: "./live-feed.component.css",
})
export class LiveFeedComponent {
  tiles: Tile[] = [
    { text: "One", cols: 3, rows: 1, color: "lightblue" },
    { text: "Two", cols: 1, rows: 2, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 1, color: "lightpink" },
    { text: "Four", cols: 2, rows: 1, color: "#DDBDF1" },
  ];
  leftItems = ["Main Entrance", "Parking Lot", "Loading Dock", "Backyard"];
  selectedSensor: { name: string; data: string } | null = null;
  videoStreamUrl: string = "http://127.0.0.1:1000/api/video_feed";
  videoStreamUrlRajak: string = "http://127.0.0.1:1000/api/thermal_video_feed";
  videoStreamUrlPtz: string = "http://127.0.0.1:1000/api/video_feed";
  videoStreamUrlHhti: string = "http://127.0.0.1:1000/api/ptz_video_feed";

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
