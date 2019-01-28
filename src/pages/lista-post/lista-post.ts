import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { LoadingController } from 'ionic-angular';

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
  public loader; 
  public refresher;
  public isRefresher: boolean = false;   

  constructor(public navCtrl: NavController, public navParams: NavParams,  private postProv: PostProvider, 
    public loadingCtrl: LoadingController) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
        content: "Carregando posts...",
      });
      this.loader.present();
    }
  
    fechaCarregando(){
      this.loader.dismiss();
    }

    doRefresh(refresher) {
      this.refresher = refresher;
      this.isRefresher = true;
      this.carregarPosts();
  
    }
    ionViewDidEnter() {
      this.carregarPosts();
  
    }

    carregarPosts() {
    this.abreCarregando();
    this.postProv.getListaPost().subscribe(
    (data)=>{
      this.list = data;
      console.log(data);
      this.fechaCarregando();
      if(this.isRefresher){
        this.refresher.complete();
        this.isRefresher = false;
      }
    }, error=> {
      console.log(error);
      this.fechaCarregando();
      if(this.isRefresher){
        this.refresher.complete();
        this.isRefresher = false;
      }
    }
    )
}
}
