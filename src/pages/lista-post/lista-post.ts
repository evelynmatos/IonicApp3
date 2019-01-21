import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPostPage } from '../detalhes-post/detalhes-post';
import { PostProvider } from '../../providers/post/post';

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
  providers:[
    PostProvider
  ]
})
export class ListaPostPage {
  
  public list:any = new Array;    

  constructor(public navCtrl: NavController, public navParams: NavParams,  private postProv: PostProvider) {
  }

  ionViewDidLoad() {
    this.postProv.getListaPost().subscribe(
    (data)=>{
      this.list = data;
      console.log(data);
    }, error=> {
      console.log(error);
    }
    )
}
}
