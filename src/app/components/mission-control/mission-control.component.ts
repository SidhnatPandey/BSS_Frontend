import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-control',
  standalone: true,
  imports: [],
  templateUrl: './mission-control.component.html',
  styleUrl: './mission-control.component.css'
})
export class MissionControlComponent {
  constructor(private router : Router){}
  nevigateToLaunchDrone(){
    this.router.navigate(["/drone-feed"]);
  }
}
