// import { Component, AfterViewInit } from '@angular/core';
// import * as L from 'leaflet';
// import 'leaflet-routing-machine';

// @Component({
//   selector: 'app-map',
//   standalone: true,
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.css']
// })
// export class MapComponent implements AfterViewInit {
//   private map!: L.Map;

//   ngAfterViewInit(): void {
//     this.initMap();
//   }

//   private initMap(): void {
//     this.map = L.map('map', {
//       center: [27.5, 77.5],
//       zoom: 7
//     });

//     L.tileLayer('https://gis.prod.devapp.nyc1.initz.run/styles/basic-preview/{z}/{x}/{y}.png', {
//       attribution: '&copy; Your GIS Data',
//       maxZoom: 18
//     }).addTo(this.map);

//     const startPoint: L.LatLngExpression = [28.7041, 77.1025];
//     const endPoint: L.LatLngExpression = [27.1767, 78.0081];

//     const startMarker = L.marker(startPoint).addTo(this.map);
//     startMarker.bindPopup('Start: Delhi').openPopup();

//     const endMarker = L.marker(endPoint).addTo(this.map);
//     endMarker.bindPopup('End: Agra').openPopup();

//     L.Routing.control({
//       waypoints: [
//         L.latLng(startPoint),
//         L.latLng(endPoint)
//       ],
//       routeWhileDragging: true,
//       show: false,
//       addWaypoints: false,
//     }).addTo(this.map);
//   }
// }


import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
    this.setCurrentLocation();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [28.7041, 77.1025],
      zoom: 12
    });

    L.tileLayer('https://gis.prod.devapp.nyc1.initz.run/styles/basic-preview/{z}/{x}/{y}.png', {
      attribution: '&copy; Your GIS Data',
      maxZoom: 18
    }).addTo(this.map);
  }

  private setCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const accuracy = position.coords.accuracy;
          const userLocation = L.latLng(lat, lng);
          console.log(position);
          // Center the map on the user's location
          this.map.setView(userLocation, 12);
  
          // Add a marker at the user's location with accuracy information
          const marker = L.marker(userLocation).addTo(this.map);
          marker.bindPopup(`You are here`).openPopup();
        },
        (error: GeolocationPositionError) => {
          console.error('Error getting location: ', error);
          // Handle error accordingly
        },
        {
          enableHighAccuracy: true, // Request high accuracy
          timeout: 5000,            // Set timeout to 5 seconds
          maximumAge: 0             // Do not use cached location
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle the case when geolocation is not supported
    }
  }
  
}





/*
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [20.83453, 82.58401],
      zoom: 14
    });

    L.tileLayer('http://localhost:8080/styles/basic-preview/#{z}/{x}/{y}.pbf', {
      attribution: '&copy; Your GIS Data',
      maxZoom: 18
    }).addTo(this.map);
  }
}


<div id="map" style="width: 100%; height: 100%;"></div>

import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-tiles',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map!: L.Map;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

    L.tileLayer('http://localhost:5000/tiles/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}


*/
