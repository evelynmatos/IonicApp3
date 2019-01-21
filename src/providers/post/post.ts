import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  private post = "http://aulas.getsandbox.com";

  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

  getLatestPost(){
    return this.http.get(this.post + "/last_post");
  }

  getListaPost(){
    return this.http.get(this.post + "/posts");
  }
}
