import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaUsuarioPage } from '../tela-usuario/tela-usuario';
import { AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { StorageProvider } from '../../providers/storage/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginProvider,
    StorageProvider
  ]
})
export class LoginPage {

  dadosUsuario = {
    user: '',
    password: ''
  };
 
  box: boolean;
  lembrar = this.storage.getLembrar();
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private login: LoginProvider,
    public alertCtrl: AlertController,
    public storage: StorageProvider) {
      
    }

  openTelaUsuario() {
    this.getUsuario();
    this.login.getLogin(this.dadosUsuario.user, this.dadosUsuario.password).then((result: any) => {
      console.log("result" + result);
      this.storage.salvarUsuario(result);
      this.storage.lembrar(this.dadosUsuario.user);
      this.navCtrl.setRoot(TelaUsuarioPage.name);

    }).catch((error) => {
      console.log(error.error.erro.codigo, error.error.erro.mensagem)
      const alert = this.alertCtrl.create({
        title: 'ERRO! ' + error.error.erro.codigo,
        subTitle: error.error.erro.mensagem,
        buttons: ['OK']
      });
      alert.present();
    })
  }

  getUsuario(){
    if(this.box){
      this.storage.lembrar(this.dadosUsuario.user);
    }else{
      console.log("usuario nao salvo")
    }
  }


}





