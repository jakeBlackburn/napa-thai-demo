import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { PhotosComponent } from '../photos/photos.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { MapComponent } from '../map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotosComponent,
    ButtonsComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
