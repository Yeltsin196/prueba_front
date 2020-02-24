import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CarouselQuoteComponent } from './carousel-quote/carousel-quote.component';
import { GridPartnesComponent } from './grid-partnes/grid-partnes.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    HeaderComponent,
    
    FooterComponent,
    
    ContactComponent,
    
    CarouselQuoteComponent,
    
    GridPartnesComponent,
    
 
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
