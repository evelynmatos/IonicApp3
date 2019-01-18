import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-mensagem',
  templateUrl: 'detalhes-mensagem.html',
})
export class DetalhesMensagemPage {

  mensagem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mensagem = this.navParams.get('mensagem'); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesMensagemPage');
  }

}
