import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesMensagemPage } from '../detalhes-mensagem/detalhes-mensagem';

/**
 * Generated class for the ListaMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mensagem',
  templateUrl: 'lista-mensagem.html',
})
export class ListaMensagemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openDetalhesMensagem(): any{
    this.navCtrl.push(DetalhesMensagemPage); 
    }

}
