import { CommonModule } from "@angular/common";
import { Component, model } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import {Modal} from 'bootstrap';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-live-feed",
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatCardModule],
  templateUrl: "./live-feed.component.html",
  styleUrl: "./live-feed.component.css",
})
export class LiveFeedComponent {
  isLoading: boolean = false;
  tiles: Tile[] = [
    { text: "One", cols: 3, rows: 1, color: "lightblue" },
    { text: "Two", cols: 1, rows: 2, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 1, color: "lightpink" },
    { text: "Four", cols: 2, rows: 1, color: "#DDBDF1" },
  ];
  leftItems = ["Main Entrance", "Parking Lot", "Loading Dock", "Backyard"];
  selectedSensor: { name: string; data: string } | null = null;
  videoStreamUrl: string = "http://127.0.0.1:1000/api/video_feed";
  videoStreamUrlRajak: string = "http://127.0.0.1:1000/api/ptz_video_feed";
  videoStreamUrlPtz: string = "http://127.0.0.1:1000/api/ptz_video_feed";
  videoStreamUrlHsti: string = "http://127.0.0.1:1000/api/thermal_video_feed";
  videoStreamUrlLorros: string = "http://127.0.0.1:1000/api/ptz_video_feed";
  commonDialogUrl: string = "";
  ngOnInit(): void {
    // Pre-select PTZ sensor as the default
    this.selectSensor({ name: 'PTZ', data: 'Live data from PTZ' });
    setTimeout(() => this.isLoading = false, 3000);
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

  openDialog(sensor: string){
    if (sensor === "RAJAK") {
      this.commonDialogUrl = this.videoStreamUrlRajak;
    } else if (sensor === "PTZ") {
      this.commonDialogUrl = this.videoStreamUrlPtz;
    } else if (sensor === "HHTI") {
      this.commonDialogUrl = this.videoStreamUrlHsti;
    } else if (sensor === "LORROS") {
      this.commonDialogUrl = this.videoStreamUrlLorros;
    } else {
      this.commonDialogUrl = this.videoStreamUrlPtz;
    }
    const element = document.getElementById("common_vedio_dialog")!;
    const commonModal = new Modal(element);
    commonModal.show();
  }
}
