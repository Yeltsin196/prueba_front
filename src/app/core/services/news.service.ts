import { Injectable } from '@angular/core';

import { News } from '../models/news.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'	  
  })	
  export class NewsService 
  {	

    constructor(private http:HttpClient ) { }

    /* public getAllNews(){
       	    return this.http.get<News[]>(
                "http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-22&sortBy=publishedAt&apiKey=db39c5a6a01d4ae4accba308a82cea36");
      }	 */  
}