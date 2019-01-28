import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaUsuarioPage } from '../tela-usuario/tela-usuario';
import { AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginProvider,
  ]
})
export class LoginPage {

  dadosUsuario = {
    user: '',
    password: ''
  };

  desabilitarBotao = true;

  habilitarBotao: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private login: LoginProvider,
    public alertCtrl: AlertController) { }

  openTelaUsuario() {

    this.login.getLogin(this.dadosUsuario.user, this.dadosUsuario.password).then((result) => {
      console.log("result" + result);
      this.navCtrl.setRoot(TelaUsuarioPage.name, { 'user': result });

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

}





