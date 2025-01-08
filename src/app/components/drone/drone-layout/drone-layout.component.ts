import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../../Sidebar/sidebar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

interface Drone {
  name: string;
  isOnline: boolean;
}

@Component({
  selector: "app-drone-layout",
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    MatCardModule,
    HeaderComponent,
    SidebarComponent,
    MatButtonModule,
    MatIconModule,
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
  selectedDrone: Drone | null = null;
  videoStreamUrl: string = "http://127.0.0.1:8000/api/video_feed";

  ngOnInit(): void {
    //this.selectDrone({ ...this.drones[1] });
  }
  selectDrone(drone: Drone) {
    this.selectedDrone = drone;
  }

  hanldeMissionRecon() {
    console.log(this.selectedDrone);
  }

  hanldeInterceptor() {
    console.log(this.selectedDrone);
  }
}
