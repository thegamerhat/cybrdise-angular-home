import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TerminalComponent } from './MyComponents/terminal/terminal.component';
// import { WavesComponent } from './MyComponents/waves/waves.component';
import { HomepageContentComponent } from './MyComponents/homepage-content/homepage-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    // WavesComponent,
    HomepageContentComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
