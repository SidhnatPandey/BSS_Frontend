import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-drone-dialog",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: "./drone-dialog.component.html",
  styleUrl: "./drone-dialog.component.css",
})
export class DroneDialogComponent {
  constructor(private dialogRef: MatDialogRef<DroneDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Close dialog with confirmation
  }
}
