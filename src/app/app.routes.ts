import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { LiveFeedWrapperComponent } from "./aetos/components/live-feed-wrapper/live-feed-wrapper.component";
import { DroneLayoutComponent } from "./aetos/components/drone-layout/drone-layout.component";
import { AetosDashboardComponent } from "./aetos/aetos-dashboard/aetos-dashboard.component";

export const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: AetosDashboardComponent },
      {
        path: "dashboard/aetos-live-feed",
        component: LiveFeedWrapperComponent,
      },
      { path: "dashboard/aetos-drone-feed", component: DroneLayoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
