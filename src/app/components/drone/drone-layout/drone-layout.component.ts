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
  drones = [
    { name: "One", isOnline: true },
    { name: "Two", isOnline: false },
    { name: "Three", isOnline: true },
    { name: "Four", isOnline: false },
  ];
  selectedDrone: any;
  videoStreamUrl: string = "http://127.0.0.1:8000/api/video_feed";

  ngOnInit(): void {
    this.selectDrone({ ...this.drones[1] });
  }
  selectDrone(drone: any) {
    this.selectedDrone = drone;
  }
}
