import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { LoginPage } from '../login/login';
import { ListaPostPage } from '../lista-post/lista-post';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    openListaMensagem(): any{
    this.navCtrl.push(ListaMensagemPage.name); 
    }
  
    openLogout(): any{
      this.navCtrl.setRoot(LoginPage);
    }
  
    openListaPost(): any{
      this.navCtrl.push(ListaPostPage.name);
  }
  
    openAlterarFoto(): any{
    this.navCtrl.push(AlterarFotoPage.name); 
  }
}

