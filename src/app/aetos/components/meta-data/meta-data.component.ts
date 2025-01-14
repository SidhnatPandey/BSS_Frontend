import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-meta-data',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './meta-data.component.html',
  styleUrl: './meta-data.component.css'
})
export class MetaDataComponent {

  currentTime: string | undefined;
  oneMinuteBefore: string | undefined;

  constructor() {
    const now = new Date();
    this.currentTime = now.toISOString(); // Current time in ISO format

    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000); // Subtract 1 minute (60 seconds * 1000 milliseconds)
    this.oneMinuteBefore = oneMinuteAgo.toISOString();
  }
}
