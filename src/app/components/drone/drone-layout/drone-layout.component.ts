import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../../Sidebar/sidebar.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DroneDialogComponent } from "../drone-dialog/drone-dialog.component";

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
    MatDividerModule,
    MatDialogModule,
    DroneDialogComponent,
  ],
  templateUrl: "./drone-layout.component.html",
  styleUrl: "./drone-layout.component.css",
})
export class DroneLayoutComponent {
  drones = [
    { name: "DRONE DJI MAVIC 3", isOnline: true },
    { name: "DRONE TRINETRA UAV", isOnline: false },
    { name: "DGI MAVIC AIR 2", isOnline: false },
    { name: "DGI PHANTOM", isOnline: false },
  ];
  selectedDrone: Drone | null = null;
  videoStreamUrl: string = "assets/video/drone.mp4";
  readonly dialog = inject(MatDialog);
  missionType: string = "";
  hideBtn: boolean = false;

  ngOnInit(): void {
    //this.selectDrone({ ...this.drones[1] });
  }
  selectDrone(drone: Drone) {
    if (!drone.isOnline) return;
    this.selectedDrone = drone;
  }

  hanldeMissionRecon() {
    if (this.missionType === "recon") return;
    this.openDialog("recon");
  }

  hanldeInterceptor() {
    if (this.missionType === "interceptor") return;
    this.openDialog("interceptor");
  }

  openDialog(launchType: string) {
    const dialogRef = this.dialog.open(DroneDialogComponent, {
      data: { launchType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && launchType !== "abort") {
        this.missionType = launchType;
        this.hideBtn = true;
      } else if (result && launchType === "abort") {
        this.missionType = "";
        this.hideBtn = false;
      }
    });
  }

  abortMission() {
    this.openDialog("abort");
  }
}
