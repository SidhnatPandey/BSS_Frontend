import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDialogComponent } from './drone-dialog.component';

describe('DroneDialogComponent', () => {
  let component: DroneDialogComponent;
  let fixture: ComponentFixture<DroneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
