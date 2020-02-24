import { Injectable } from '@angular/core';

import { Users } from '../models/users.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'	  
  })	
  export class UsersService
  {	

    constructor(private http:HttpClient ) { }

    public getAllUsers(){
       	    return this.http.get<Users[]>(
                "https://jsonplaceholder.typicode.com/users");
      }	  
}