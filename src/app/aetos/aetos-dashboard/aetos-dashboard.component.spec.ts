import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AetosDashboardComponent } from './aetos-dashboard.component';

describe('AetosDashboardComponent', () => {
  let component: AetosDashboardComponent;
  let fixture: ComponentFixture<AetosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AetosDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AetosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
