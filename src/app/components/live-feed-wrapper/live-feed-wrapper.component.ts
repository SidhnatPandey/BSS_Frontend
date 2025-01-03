import { Component } from "@angular/core";
// moduels
import { MatGridListModule } from "@angular/material/grid-list";
import { CdkDragDrop, DragDropModule } from "@angular/cdk/drag-drop";

//components
import { IndMapComponent } from "../ind-map/ind-map.component";
import { LiveFeedComponent } from "../live-feed/live-feed.component";
import { MetaDataComponent } from "../meta-data/meta-data.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-live-feed-wrapper",
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    DragDropModule,
    IndMapComponent,
    LiveFeedComponent,
    MetaDataComponent,
  ],
  templateUrl: "./live-feed-wrapper.component.html",
  styleUrl: "./live-feed-wrapper.component.css",
})
export class LiveFeedWrapperComponent {
  //droppedSensor: { name: string; data: string } | null = null;

  selectedSensor: { name: string; data: string } | null = null;

  /*  onDrop(event: CdkDragDrop<any>) {
    this.droppedSensor = event.item.data;
    event.previousContainer.data = event.previousContainer.data;
  } */

  selectSensor(sensor: { name: string; data: string }) {
    this.selectedSensor = sensor;
  }
}
