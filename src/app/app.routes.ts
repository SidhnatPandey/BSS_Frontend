import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { LiveFeedWrapperComponent } from "./components/live-feed-wrapper/live-feed-wrapper.component";
import { DroneLayoutComponent } from "./components/drone/drone-layout/drone-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "live-feed", component: LiveFeedWrapperComponent },
      { path: "drone-feed", component: DroneLayoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
