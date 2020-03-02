import { Component, OnInit } from "@angular/core";
import { ResultNewsService } from "../core/services/resultnews.service";
import { ResultNews } from "../core/models/resultnews.model";
import { News } from "../core/models/news.model";
import { NewsService } from "../core/services/news.service";

declare var $: any;

@Component({
  selector: "app-carousel-posts",
  templateUrl: "./carousel-posts.component.html",
  styleUrls: ["./carousel-posts.component.css"]
})
export class CarouselPostsComponent implements OnInit {
  news: News[] = [];
  ResultNews: ResultNews[] = [];
  newsA = [];
  constructor(
    private newsService: NewsService,
    private resultNewsService: ResultNewsService
  ) {
     
  }

  ngOnInit(): void {
   
    this.fetchNews();
  }

  fetchNews() {
    this.resultNewsService.getAllNews().subscribe(result => {
      this.ResultNews = result;

      this.news = this.ResultNews["articles"];
      
     
      for(var i=0;i<this.news.length/4;i++){
        
        
        var v=[];
        var x=0;
  
        for(var j=0;j<4;j++){
        
           v[x]=this.news[(i*4)+j];
          x++; 
        }
         this.newsA[i]=v;
        
        v=[]; 
      }
    });
  }
}
