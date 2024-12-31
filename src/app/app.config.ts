import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CircleProgressOptions } from 'ng-circle-progress';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(),{
    provide: CircleProgressOptions,
    useValue: {
      radius: 60,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E1E5",
      animationDuration: 300,
      showBackground: true,
      backgroundStrokeWidth: 10,
      backgroundStrokeColor: "#e7e7e7",
    },
  },]
};
