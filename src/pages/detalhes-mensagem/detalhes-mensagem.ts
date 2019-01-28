import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes-mensagem',
  templateUrl: 'detalhes-mensagem.html',
})
export class DetalhesMensagemPage {

  public loader;
  mensagem;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.mensagem = this.navParams.get('mensagem'); 

  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
        content: "Carregando detalhes...",
      });
      this.loader.present();
    }
  
    fechaCarregando(){
      this.loader.dismiss();
    }

  ionViewDidEnter() {
    this.abreCarregando();
    console.log('ionViewDidLoad DetalhesMensagemPage');
   this.fechaCarregando();
  }

}
