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
import { FacebookComponent } from './components/pages/facebook/facebook.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TwitterFilterComponent } from './components/popups/twitter-filter/twitter-filter.component';
import { HighlightPipe } from './components/pipes/highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwitterComponent,
    FacebookComponent,
    TwitterFilterComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
