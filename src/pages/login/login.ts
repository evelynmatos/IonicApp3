import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaUsuarioPage } from '../tela-usuario/tela-usuario';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';


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
  providers:[
    LoginProvider
  ]
})
export class LoginPage {

  user;
  public objeto_login = {
    login: "evelyn",
    password: "1234" 
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private login: LoginProvider, public alertCtrl: AlertController) {
  }

  TelaUsuario(username, password){
    this.login.getLogin(username, password).then((result)=>{
      console.log("result" + result);
       this.navCtrl.setRoot(TelaUsuarioPage.name, {'user':result});

    }).catch((error)=>{
       console.log(error.error.erro.codigo, error.error.erro.mensagem)
       const alert = this.alertCtrl.create({
        title: 'ERRO! '+ error.error.erro.codigo,
        subTitle: error.error.erro.mensagem,
        buttons: ['OK']
      });
      alert.present();
    })
  }

}
  
  
  

  
