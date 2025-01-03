import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFeedWrapperComponent } from './live-feed-wrapper.component';

describe('LiveFeedWrapperComponent', () => {
  let component: LiveFeedWrapperComponent;
  let fixture: ComponentFixture<LiveFeedWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveFeedWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFeedWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
