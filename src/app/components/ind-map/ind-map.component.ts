import { Component } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

@Component({
  selector: "app-ind-map",
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: "./ind-map.component.html",
  styleUrl: "./ind-map.component.css",
})
export class IndMapComponent {
  center: google.maps.LatLngLiteral = { lat: 28.5961, lng: 77.1587 };
  zoom = 10;

  // Use google.maps.MapTypeId for map type
  // mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.TERRAIN;
  // Define map options including mapTypeId
    mapOptions: google.maps.MapOptions = {
      center: this.center,
      zoom: this.zoom,
      mapTypeId: "hybrid",
      disableDefaultUI: false,
    };
  
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 28.5961, lng: 77.1587 },
  ];

  addMarker(event: google.maps.MapMouseEvent) {
    console.log(event);

    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }


}