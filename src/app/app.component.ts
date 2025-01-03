import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, DashboardComponent, RouterOutlet, NgApexchartsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "project";
}
