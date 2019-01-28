import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalhes-post',
  templateUrl: 'detalhes-post.html',
})
export class DetalhesPostPage {

  item = this.navParams.get('item');
  public loader;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando detalhes...",
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.abreCarregando();
    this.item.data = this.navParams.get('data');
    this.fechaCarregando();
  }

}
