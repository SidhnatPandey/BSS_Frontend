import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SseClient } from 'ngx-sse-client';

@Component({
  selector: 'app-meta-data',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './meta-data.component.html',
  styleUrl: './meta-data.component.css'
})
export class MetaDataComponent implements OnInit {

  currentTime: string | undefined;
  oneMinuteBefore: string | undefined;
  private apiUrl = "http://127.0.0.1:1000/api/metadata";
  metadata: any = [];
  hhtiData: any[] = [];
  ptzData: any[] = [];
  hhtiDetectedObjects: string = 'No objects detected';
  ptzDetectedObjects: string = 'No objects detected';

//   dummy_data = [
//       {
//          "sensor_name":"TRINETRA-DRONE",
//          "data":[
//             {
//                "id":6,
//                "sensor_name":"TRINETRA-DRONE",
//                "sensor_id":"DRONE@SU123",
//                "object_count":2,
//                "timestamp":"2025-02-17T12:48:37.447095",
//                "detected_objects":[
//                   "2soldier"
//                ],
//                "sensor_type":"UAV",
//                "target_type":"2soldier",
//                "target_sub_type":"",
//                "target_cl":"T69",
//                "activity_type":"",
//                "activity_sub_type":"",
//                "activity_cl":"",
//                "axis_bg":"",
//                "rg":"",
//                "lat":"",
//                "long":"",
//                "height":"",
//                "easting":"",
//                "northing":"",
//                "zone":""
//             }
//          ]
//       },
//       {
//          "sensor_name":"HHTI",
//          "data":[
//          ]
//       },
//       {
//          "sensor_name":"PTZ",
//          "data":[
//             {
//                "id":12,
//                "sensor_name":"PTZ",
//                "sensor_id":"PTZ@SU123",
//                "object_count":1,
//                "timestamp":"2025-02-17T12:51:07.229224",
//                "detected_objects":[
//                   "1soldier"
//                ],
//                "sensor_type":"UAV",
//                "target_type":"1soldier",
//                "target_sub_type":"",
//                "target_cl":"T69",
//                "activity_type":"",
//                "activity_sub_type":"",
//                "activity_cl":"",
//                "axis_bg":"",
//                "rg":"",
//                "lat":"",
//                "long":"",
//                "height":"",
//                "easting":"",
//                "northing":"",
//                "zone":""
//             }
//          ]
//       }
//    ]

  constructor(private sseClient : SseClient) {
    const now = new Date();
    this.currentTime = now.toISOString(); // Current time in ISO format

    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000); // Subtract 1 minute (60 seconds * 1000 milliseconds)
    this.oneMinuteBefore = oneMinuteAgo.toISOString();
  }

  ngOnInit(): void {
    // Fetch notifications through sse events
    const headers = new HttpHeaders();
    this.sseClient.stream(this.apiUrl, { keepAlive: true, reconnectionDelay: 1_000, responseType: 'event' }, { headers }, 'GET').subscribe((event) => {
      if (event.type === 'error') {
        const errorEvent = event as ErrorEvent;
        console.error(errorEvent.error, errorEvent.message);
      } else {
        const messageEvent = event as MessageEvent;
        this.metadata = JSON.parse(messageEvent.data).object_metadata;
      this.hhtiData = this.metadata.find((obj: any) => obj.sensor_name === 'HHTI')?.data || [];
        this.ptzData = this.metadata.find((obj: any) => obj.sensor_name === 'PTZ')?.data || [];
        this.hhtiDetectedObjects = this.computeDetectedObjects(this.hhtiData);
        this.ptzDetectedObjects = this.computeDetectedObjects(this.ptzData);
      }
    });
  }

  private computeDetectedObjects(data: any[]): string {
    if (data.length > 0 && data[0].detected_objects.length > 0) {
      return data[0].detected_objects.join(', ');
    }
    return 'No objects detected';
  }
}
