import { Component, OnInit } from '@angular/core';
import { News } from '../core/models/news.model';
import {NewsService } from '../core/services/news.service';
import {ResultNewsService} from '../core/services/resultnews.service';
import {ResultNews} from "../core/models/resultnews.model";
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: News[]=[];
  ResultNews:ResultNews[]=[];
  constructor(
    private newsService:NewsService,
    private resultNewsService:ResultNewsService
  ) { }
  
  ngOnInit(): void {
   
    this.fetchNews();
  
  }

  ngAfterViewInit(){
  
    this.carrousel();
    //$("#owl-demo").appendTo(document.getElementById("items"));
   
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
  fetchNews(){
    this.resultNewsService.getAllNews()
    .subscribe(result => {
      this.ResultNews = result;
      
      this.news=this.ResultNews["articles"];
   
      let string:string;
      for(let i=0;i<=this.news.length -1;i++){
        string += '<div class="card"><div class="card-body"><img style="width: 254px!important;height: 255px!important;" src="../../assets/icon-2.png" alt=""> <div class="card-title"><p >Great <strong>Communication</strong></p></div><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div></div>';
        
      }
     string = string.replace('undefined','');
     $('.documentation').append(string);
     
    });
    
  }

  carrousel(){
    
    setTimeout(function () {
      $('.documentation').owlCarousel({
        loop: true,
        margin: 10,
         nav: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }

      });
    }, 3000);
  }

}
