import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import './leaflet-markercluster-loader';  // <-- must be the first import

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
