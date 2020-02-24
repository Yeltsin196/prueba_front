import { Component, OnInit } from '@angular/core';
import{UsersService} from '../core/services/users.services';
import{Users} from '../core/models/users.model';
@Component({
  selector: 'app-carousel-quote',
  templateUrl: './carousel-quote.component.html',
  styleUrls: ['./carousel-quote.component.css']
})
export class CarouselQuoteComponent implements OnInit {
  users:Users[]=[];
  users1:Users[]=[];
  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }


  fetchUsers(){
    this.usersService.getAllUsers()
    .subscribe(result => {
    
      this.users = result;
      this.users1[0]=this.users[0];
      
    });
    
  }
}
