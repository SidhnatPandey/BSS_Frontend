import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";

@Component({
  selector: "app-drone-dialog",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: "./drone-dialog.component.html",
  styleUrl: "./drone-dialog.component.css",
})
export class DroneDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DroneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onConfirm(): void {
    this.dialogRef.close(true); // Close dialog with confirmation
  }
}
