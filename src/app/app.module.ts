import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TerminalComponent } from './MyComponents/terminal/terminal.component';
// import { WavesComponent } from './MyComponents/waves/waves.component';
import { HomepageContentComponent } from './MyComponents/homepage-content/homepage-content.component';
import { QuickvmPageComponent } from './MyPages/quickvm-page/quickvm-page.component';
import { SitaraPageComponent } from './MyPages/sitara-page/sitara-page.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    // WavesComponent,
    HomepageContentComponent,
    QuickvmPageComponent,
    SitaraPageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'optimize', component: SitaraPageComponent},
      {path: 'quick-vm', component: SitaraPageComponent},
      {path: 'prism', component: SitaraPageComponent},
      {path: '', component: HomepageComponent},
    ]),
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
