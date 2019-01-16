import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-post',
  templateUrl: 'lista-post.html',
})
export class ListaPostPage {
  
  list = [{
     autor : "webmaster",
     titulo: "teste Lorem ipsum",
     data: "2019-01-02T17:14:34.810Z",
     mensagem:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },{
    autor : "webmaster",
    titulo: "teste Lorem ipsum",
    data: "2019-01-02T17:14:34.810Z",
    mensagem:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
 }];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}