import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndMapComponent } from './ind-map.component';

describe('IndMapComponent', () => {
  let component: IndMapComponent;
  let fixture: ComponentFixture<IndMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
