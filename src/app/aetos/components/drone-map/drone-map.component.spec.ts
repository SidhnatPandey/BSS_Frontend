import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneMapComponent } from './drone-map.component';

describe('DroneMapComponent', () => {
  let component: DroneMapComponent;
  let fixture: ComponentFixture<DroneMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
