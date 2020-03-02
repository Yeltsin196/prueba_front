import { Injectable } from "@angular/core";

import { Contact } from "../models/contact.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private http: HttpClient) {}

  public create(contact:Contact) {
    return this.http.post(
      "http://jsonplaceholder.typicode.com/posts",contact
    );
  }
}
