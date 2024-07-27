import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroIntroComponent } from './hero-intro/hero-intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MainSiteDataComponent } from './main-site-data/main-site-data.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroIntroComponent,
    GalleryComponent,
    ContactMeComponent,
    MainSiteDataComponent,
    AboutComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}


