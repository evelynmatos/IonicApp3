import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';


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