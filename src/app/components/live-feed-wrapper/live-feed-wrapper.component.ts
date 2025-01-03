import { Component } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { IndMapComponent } from "../ind-map/ind-map.component";
import { LiveFeedComponent } from "../live-feed/live-feed.component";
import { MetaDataComponent } from "../meta-data/meta-data.component";

@Component({
  selector: "app-live-feed-wrapper",
  standalone: true,
  imports: [
    MatGridListModule,
    IndMapComponent,
    LiveFeedComponent,
    MetaDataComponent,
  ],
  templateUrl: "./live-feed-wrapper.component.html",
  styleUrl: "./live-feed-wrapper.component.css",
})
export class LiveFeedWrapperComponent {}
