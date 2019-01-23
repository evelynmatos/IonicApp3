import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import hasha from 'hasha';

@Injectable()
export class LoginProvider {

  private base = " http://aulas2.getsandbox.com";

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  getLogin(user, password){
   let senha = hasha(password,{algorithm: 'sha256', encoding: 'base64'});
   return new Promise((resolve, reject) => {
    var data={
      login: user,
      senha: senha
    };
    this.http.post(this.base + "/login", data)
        .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
}
