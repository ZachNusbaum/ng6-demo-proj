import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  public getUsers() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  public getUser(user_id) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );
  }

  public getPosts() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
