import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneLayoutComponent } from './drone-layout.component';

describe('DroneLayoutComponent', () => {
  let component: DroneLayoutComponent;
  let fixture: ComponentFixture<DroneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
