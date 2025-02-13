import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./Sidebar/sidebar.component";
import { LiveFeedWrapperComponent } from "./aetos/components/live-feed-wrapper/live-feed-wrapper.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    DashboardComponent,
    RouterOutlet,
    NgApexchartsModule,
    HeaderComponent,
    LiveFeedWrapperComponent,
    SidebarComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "project";
}
