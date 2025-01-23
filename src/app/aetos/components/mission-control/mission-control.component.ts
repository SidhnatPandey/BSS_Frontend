import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { DroneLayoutComponent } from "../drone-layout/drone-layout.component";

@Component({
  selector: "app-mission-control",
  standalone: true,
  imports: [CommonModule, DroneLayoutComponent],
  templateUrl: "./mission-control.component.html",
  styleUrl: "./mission-control.component.css",
})
export class MissionControlComponent {
  incidentReport: any;
  isMiniPlayer = false;

  constructor(private router: Router, private dialog: MatDialog) {
    this.incidentReport = {
      dateTime: "2025-01-09T14:45:00Z",
      location: "Sector 14B, Border Region near Sempira Valley",
      source: "Aerial Surveillance UAV - Recon-Alpha 07",
      incidentOverview: {
        summary:
          "Surveillance captured a medium-duty truck with three armed personnel and two additional soldiers securing the area.",
        details: [
          "Unmarked truck, approximately 3.5 tons, stationary at dirt road intersection.",
          "Three armed personnel visible in camouflage uniforms.",
          "Two additional armed soldiers patrolling a 25-meter perimeter.",
        ],
      },
      regionalContext: {
        significance:
          "Area known for low-level insurgency activity and proximity to a critical supply corridor (Route Z-12).",
        recentHistory: [
          "Three IED incidents reported along Route Z-12 in the past six months.",
          "Suspected involvement of the Red Wolf Brigade insurgent group.",
          "Recent SIGINT intercepts indicate potential arms shipment ('Operation Black Thorn').",
          "HUMINT reports increased insurgent recruitment activity in nearby villages.",
        ],
      },
      threatAnalysis: {
        threatIndicators: [
          "Personnel lack standard military insignia.",
          "Location suggests possible reconnaissance or ambush preparation.",
        ],
        nonThreatIndicators: [
          "No heavy weaponry (e.g., RPGs, machine guns) observed.",
          "Low activity suggests a defensive rather than offensive posture.",
        ],
        threatLevel: "Moderate",
      },
      recommendedActions: {
        surveillance:
          "Maintain real-time monitoring for 2 hours with Recon-Alpha 07.",
        intelValidation:
          "Cross-check SIGINT and HUMINT reports for correlation with activity.",
        defensiveMeasures:
          "Notify allied checkpoints along Route Z-12 to increase readiness.",
      },
    };
  }
  nevigateToLaunchDrone() {
    this.router.navigate(["/dashboard/aetos-drone-feed"]);
  }
  toggleMiniPlayer() {
    this.isMiniPlayer = !this.isMiniPlayer;
  }
}
