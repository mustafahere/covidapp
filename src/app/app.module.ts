import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrackerComponent } from './tracker/tracker.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {GetdataService} from './getdata.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackerComponent,
    NavigationComponent,
    LoaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
