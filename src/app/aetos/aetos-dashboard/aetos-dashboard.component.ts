// import { Component, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// import { MatCardModule } from "@angular/material/card";
// import { MatIconModule } from "@angular/material/icon";
// import { Router } from "@angular/router";

// @Component({
//   selector: "app-aetos-dashboard",
//   standalone: true,
//   imports: [FontAwesomeModule, CommonModule, MatCardModule, MatIconModule],
//   templateUrl: "./aetos-dashboard.component.html",
//   styleUrl: "./aetos-dashboard.component.css",
// })
// export class AetosDashboardComponent {
//   photos = [
//     {
//       label: "BSS 1",
//       url: "assets/bss/b1.jpg",
//       lastUpdate: 0,
//       videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
//     },
//     {
//       label: "BSS 2",
//       url: "assets/bss/b4.png",
//       lastUpdate: 0,
//       videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
//     },
//     {
//       label: "BSS 3",
//       url: "assets/bss/b3.jpg",
//       lastUpdate: 0,
//       videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
//     },
//     {
//       label: "BSS 4",
//       url: "assets/bss/b2.png",
//       lastUpdate: 0,
//       videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
//     },
//     {
//       label: "BSS 5",
//       url: "assets/bss/b5.png",
//       lastUpdate: 0,
//       videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
//     },
//     {
//       label: "BSS 6",
//       url: "assets/bss/photo6.jpg",
//       lastUpdate: 0,
//       videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
//     },
//   ];
//   alertCount = 0;
//   activeAlertIndex: number | null = null;

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.startRefreshTimer();
//     // Delay the alert by 10 seconds (10000 milliseconds)
//     setTimeout(() => {
//       this.activeAlertIndex = 2; // Index of the card where the alert should appear
//       this.alertCount++;
//     }, 5000);
//   }

//   startRefreshTimer(): void {
//     setInterval(() => {
//       this.photos.forEach((photo) => {
//         photo.lastUpdate++;
//         if (photo.lastUpdate > 15) {
//           photo.lastUpdate = 0; // Reset after 15 seconds
//         }
//       });
//     }, 1000); // Increment every second
//   }

//   navigateToLiveFeed(photo: any): void {
//     // Navigate to /live-feed with optional query parameters or state
//     this.router.navigate(["/dashboard/aetos-live-feed"], {
//       queryParams: { location: photo.label },
//     });
//   }
// }

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { Router } from "@angular/router";
import bootstrap, {Modal} from 'bootstrap';
 
interface BSS {
  id: number;
  name: string;
  status: "active" | "inactive";
  lastUpdate: number;
  image: string;
}
 
@Component({
  selector: "app-aetos-dashboard",
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, MatCardModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./aetos-dashboard.component.html",
  styleUrl: "./aetos-dashboard.component.css",
})
export class AetosDashboardComponent implements OnInit {  
  photos = [
    {
      label: "BSS 1",
      url: "assets/bss/b1.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 2",
      url: "assets/bss/b4.png",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 3",
      url: "assets/bss/b3.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 4",
      url: "assets/bss/b2.png",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 5",
      url: "assets/bss/b5.png",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
    {
      label: "BSS 6",
      url: "assets/bss/photo6.jpg",
      lastUpdate: 0,
      videoFeedUrl: "http://127.0.0.1:8000/api/ptz_video_feed",
    },
  ];
  alertCount = 0;
  activeAlertIndex: number | null = null;
 
  locations: BSS[] = [
    {
      id: 1,
      name: "BSS 1",
      status: "active",
      lastUpdate: 0,
      image: "assets/bss/b1.jpg",
    },
    {
      id: 2,
      name: "BSS 2",
      status: "active",
      lastUpdate: 0,
      image: "assets/bss/b4.png",
    },
    {
      id: 3,
      name: "BSS 3",
      status: "active",
      lastUpdate: 0,
      image: "assets/bss/b3.jpg",
    },
    {
      id: 4,
      name: "BSS 4",
      status: "active",
      lastUpdate: 0,
      image: "assets/bss/b2.png",
    },
    {
      id: 5,
      name: "BSS 5",
      status: "active",
      lastUpdate: 0,
      image: "assets/bss/b5.png",
    },
    {
      id: 6,
      name: "BSS 6",
      status: "active",
      lastUpdate: 0,
      image: "assets/bss/photo6.jpg",
    },
  ];
 
  @ViewChild('closeBtn') closeBtn!: ElementRef<HTMLButtonElement>;
  
  constructor(private fb: FormBuilder, private router: Router) {}
  bssForm!: FormGroup;
 
  ngOnInit(): void {
    this.bssForm = this.fb.group({
      bssName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')],],
      bssLatitude: ['', [Validators.required, Validators.pattern('^-?\\d+(\\.\\d+)?$')],],
      bssLongitude: ['', [Validators.required, Validators.pattern('^-?\\d+(\\.\\d+)?$')],],
      bssImage: [null, Validators.required],
    });
    this.startRefreshTimer();
    // Delay the alert by 10 seconds (10000 milliseconds)
    setTimeout(() => {
      this.activeAlertIndex = 2; // Index of the card where the alert should appear
      this.alertCount++;
    }, 5000);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.bssForm.patchValue({ bssImage: file });
    } else {
      this.bssForm.patchValue({ bssImage: null });
    }
  }

  onSubmit() {
    if (this.bssForm?.valid) {   
      this.locations.push({
        id: this.locations.length + 1,
        name: this.bssForm?.value?.bssName,
        status: "active",
        lastUpdate: 0,
        image: "assets/bss/b4.png",
      });
      this.closeBtn.nativeElement.click(); 
      this.bssForm.reset();
    } else {
      console.log('Form is invalid');
    }
  };
 
  startRefreshTimer(): void {
    setInterval(() => {
      this.photos.forEach((photo) => {
        photo.lastUpdate++;
        if (photo.lastUpdate > 15) {
          photo.lastUpdate = 0; // Reset after 15 seconds
        }
      });
      this.locations.forEach((photo) => {
        photo.lastUpdate++;
        if (photo.lastUpdate > 15) {
          photo.lastUpdate = 0; // Reset after 15 seconds
        }
      });
    }, 1000);
  }
 
  navigateToLiveFeed(photo: any): void {
    // Navigate to /live-feed with optional query parameters or state
    this.router.navigate(["/dashboard/aetos-live-feed"], {
      queryParams: { location: photo.label },
    });
  }

  handleButtonClick() {
    console.log('Floating button clicked');
  }

}