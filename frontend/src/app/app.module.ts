import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { TwitterWhitelistComponent } from '../app/components/popups/twitter-whitelist/twitter-whitelist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwitterComponent,
    LinkedInComponent,
    TwitterFilterComponent,
    HighlightPipe,
    TwitterWordsFilterComponent,
    DialogPopUpComponent,
    LoginComponent,
    RegisterComponent,
    TwitterWhitelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    ChartModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule
  ],
  providers: [ AuthGuard, { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
