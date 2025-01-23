import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import Swal from "sweetalert2";

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
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
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

  altitude: number = 120;
  speed: number = 35;
  heading: string = "20°";
  gps: { latitude: number; longitude: number } = {
    latitude: 40.712,
    longitude: 74.006,
  };

  selectedDrone: Drone | null = null;
  videoStreamUrl: string = "http://127.0.0.1:8000/api/video_feed";
  readonly dialog = inject(MatDialog);
  missionType: string = "";
  hideBtn: boolean = false;
  loading: boolean = false;

  @Input() isMiniplayerMode!: boolean;

  ngOnInit(): void {
    this.updateValuesRandomly();
  }

  updateValuesRandomly() {
    setInterval(() => {
      this.altitude = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
      this.speed = Math.floor(Math.random() * (50 - 40 + 1)) + 40;
      this.heading = `${Math.floor(Math.random() * 360)}°`;
      this.gps = {
        latitude: +(Math.random() * 50).toFixed(3) + 100,
        longitude: +(Math.random() * 10).toFixed(3) + 100,
      };
    }, 1000);
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
    // const dialogRef = this.dialog.open(DroneDialogComponent, {
    //   data: { launchType },
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result && launchType !== "abort") {
    //     this.missionType = launchType;
    //     this.hideBtn = true;
    //     this.loading = true;
    //     setTimeout(() => this.loading = false,2000)
    //   } else if (result && launchType === "abort") {
    //     this.missionType = "";
    //     this.hideBtn = false;
    //   }
    // });

    Swal.fire({
      html: `
        <h2>Are you Sure?</h2>
        <p>You want to proceed with this Flight Path!</p>
        <img src="assets/bss/flight_path.png" style="height: 19rem" alt="flight path" />
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "teal",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        this.missionType = launchType;
        this.hideBtn = true;
        // this.loading = true;
        setTimeout(() => (this.loading = false), 2000);
      }
    });
  }

  abortMission() {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to abort the mission!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "teal",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        this.missionType = "";
        this.hideBtn = false;
      }
    });
  }
}
