import { Injectable } from '@angular/core';

import { News } from '../models/news.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'	  
  })	
  export class NewsService 
  {	

    constructor(private http:HttpClient ) { }

    /*  */  
}