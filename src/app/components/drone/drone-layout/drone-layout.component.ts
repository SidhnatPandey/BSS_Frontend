import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../../Sidebar/sidebar.component";

@Component({
  selector: "app-drone-layout",
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    MatCardModule,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: "./drone-layout.component.html",
  styleUrl: "./drone-layout.component.css",
})
export class DroneLayoutComponent {
  tiles = [
    { text: "One", cols: 3, rows: 1, color: "lightblue" },
    { text: "Two", cols: 1, rows: 2, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 1, color: "lightpink" },
    { text: "Four", cols: 2, rows: 1, color: "#DDBDF1" },
  ];
  leftItems = ["Main Entrance", "Parking Lot", "Loading Dock", "Backyard"];
  selectedSensor: { name: string; data: string } | null = null;
  videoStreamUrl: string = "http://127.0.0.1:8000/api/video_feed";
  videoStreamUrlRajak: string = "http://127.0.0.1:8000/api/ptz_video_feed";
  videoStreamUrlPtz: string = "http://127.0.0.1:8000/api/ptz_video_feed";
  videoStreamUrlHsti: string = "http://127.0.0.1:8000/api/thermal_video_feed";
  videoStreamUrlLorros: string = "http://127.0.0.1:8000/api/ptz_video_feed";

  ngOnInit(): void {
    // Pre-select PTZ sensor as the default
    this.selectSensor({ name: "PTZ", data: "Live data from PTZ" });
  }
  selectSensor(sensor: { name: string; data: string }) {
    this.selectedSensor = sensor;
    if (sensor.name === "RAJAK") {
      this.videoStreamUrl = this.videoStreamUrlRajak;
    } else if (sensor.name === "PTZ") {
      this.videoStreamUrl = this.videoStreamUrlPtz;
    } else if (sensor.name === "HSTI") {
      this.videoStreamUrl = this.videoStreamUrlHsti;
    } else if (sensor.name === "LORROS") {
      this.videoStreamUrl = this.videoStreamUrlLorros;
    } else {
      this.videoStreamUrl = this.videoStreamUrlPtz;
    }
  }
}
