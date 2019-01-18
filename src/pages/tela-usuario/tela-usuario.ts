import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { LoginPage } from '../login/login';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ListaPostPage } from '../lista-post/lista-post';

/**
 * Generated class for the TelaUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-usuario',
  templateUrl: 'tela-usuario.html',
})
export class TelaUsuarioPage {

  list = {
    autor : "webmaster",
    titulo: "teste Lorem ipsum",
    data: "2019-01-02T17:14:34.810Z",
    mensagem:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    openListaMensagem(){
    this.navCtrl.push(ListaMensagemPage.name); 
    }
  
    openLogout(){
      this.navCtrl.setRoot(LoginPage.name);
    }
  
    openListaPost(){
      this.navCtrl.push(ListaPostPage.name);
  }
  
    openAlterarFoto(){
    this.navCtrl.push(AlterarFotoPage.name); 
  }
}  

