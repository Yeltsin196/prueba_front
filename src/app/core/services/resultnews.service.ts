import { Injectable } from '@angular/core';

import { ResultNews } from '../models/resultnews.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'	  
  })	
  export class ResultNewsService 
  {	

    constructor(private http:HttpClient ) { }

    public getAllNews(){
       	    return this.http.get<ResultNews[]>(
                "http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-25&sortBy=publishedAt&apiKey=db39c5a6a01d4ae4accba308a82cea36");
      }	  
}