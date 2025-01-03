import { Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./Navbar/navbar.component";
import { SidebarComponent } from "./Sidebar/sidebar.component";
import { DashboardComponent } from "./Dashboard/dashboard.component";

export const routes: Routes = [{ path: "", component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
