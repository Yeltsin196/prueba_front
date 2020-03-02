import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CarouselQuoteComponent } from './carousel-quote/carousel-quote.component';
import { GridPartnesComponent } from './grid-partnes/grid-partnes.component';
import {CarouselPostsComponent} from './carousel-posts/carousel-posts.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    

    
    FooterComponent,
    
    ContactComponent,
    
    CarouselQuoteComponent,
    
    GridPartnesComponent,
    
    CarouselPostsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
