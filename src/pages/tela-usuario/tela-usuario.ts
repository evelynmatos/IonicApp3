import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { LoginPage } from '../login/login';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ListaPostPage } from '../lista-post/lista-post';
import { PostProvider } from '../../providers/post/post';
import { LoginProvider } from '../../providers/login/login';

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
  providers: [
    PostProvider
  ]
})
export class TelaUsuarioPage {

  post:any;  
  user = this.navParams.get("user");

 
  constructor(public navCtrl: NavController, public navParams: NavParams, private postProv: PostProvider, private login: LoginProvider) {
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

    ionViewDidLoad() {
      console.log(this.user)
      this.postProv.getLatestPost().subscribe(
        (data) =>{
          this.post = data;
          console.log(data);
        }, error=> {
          console.log(error);
        })
    }
      
   
}