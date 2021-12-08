import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from "@angular/material/dialog";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TwitterComponent } from './components/pages/twitter/twitter.component';
import { LinkedInComponent } from './components/pages/linkedIn/linkedIn.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TwitterFilterComponent } from './components/popups/twitter-filter/twitter-filter.component';
import { HighlightPipe } from './components/pipes/highlight.pipe';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { TwitterWordsFilterComponent } from './components/popups/twitter-words-filter/twitter-words-filter.component';
import { DialogPopUpComponent } from './components/popups/dialog-pop-up/dialog-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwitterComponent,
    LinkedInComponent,
    TwitterFilterComponent,
    HighlightPipe,
    TwitterWordsFilterComponent,
    DialogPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    ChartModule,
  ],
  providers: [ { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
