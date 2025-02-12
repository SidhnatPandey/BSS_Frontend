import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-drone-map',
  standalone: true,
  templateUrl: './drone-map.component.html',
  styleUrls: ['./drone-map.component.css']
})
export class DroneMapComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [27.5, 77.5],
      zoom: 7
    });

    L.tileLayer('https://gis.prod.devapp.nyc1.initz.run/styles/basic-preview/{z}/{x}/{y}.png', {
      attribution: '&copy; Your GIS Data',
      maxZoom: 18
    }).addTo(this.map);

    const startPoint: L.LatLngExpression = [28.7041, 77.1025];
    const endPoint: L.LatLngExpression = [27.1767, 78.0081];

    const startMarker = L.marker(startPoint).addTo(this.map);
    startMarker.bindPopup('Start: Delhi').openPopup();

    const endMarker = L.marker(endPoint).addTo(this.map);
    endMarker.bindPopup('End: Agra').openPopup();

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startPoint),
        L.latLng(endPoint)
      ],
      routeWhileDragging: true,
      show: false,
      addWaypoints: false,
    }).addTo(this.map);

    routingControl.hide();
  }
}
