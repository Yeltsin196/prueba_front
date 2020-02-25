import { Component, OnInit } from '@angular/core';
import { News } from '../core/models/news.model';
import {NewsService } from '../core/services/news.service';
import{UsersService} from '../core/services/users.services';
import {ResultNewsService} from '../core/services/resultnews.service';
import {ResultNews} from "../core/models/resultnews.model";
import{Users} from '../core/models/users.model';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: News[]=[];
  ResultNews:ResultNews[]=[];
  users:Users[]=[];
  users1:Users[]=[];
  constructor(
    private newsService:NewsService,
    private resultNewsService:ResultNewsService,
    private usersService:UsersService
  ) { }
  
  ngOnInit(): void {
   
    
    this.fetchUsers();
    $('.carousel').carousel('pause');
  }

  ngAfterViewInit(){
  
   
    $('.carousel').carousel('pause');
  
   
  }
  ngOnDestroy(): void {
    
    
  }
  

  fetchUsers(){
    this.usersService.getAllUsers()
    .subscribe(result => {
    
      this.users = result;
      this.users1[0]=this.users[0];
      
    });
    
  }
 
}
