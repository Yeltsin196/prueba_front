import { Component, OnInit } from '@angular/core';
import {ContactService} from '../core/services/contact.service';
import {Contact } from '../core/models/contact.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user:Contact ={
    title:'',
    body:'',
    userId:1
  };
  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
  }

    ngSubmit(){
      
     
      this.contactService.create(this.user).subscribe(()=>{
        console.log(this.user);
      });
    }
}
