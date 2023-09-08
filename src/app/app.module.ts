import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubeComponent } from './you-tube/you-tube.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    YouTubeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
