import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaUsuarioPage } from '../tela-usuario/tela-usuario';
import { LoginProvider } from '../../providers/login/login';

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

  public objeto_login = {
    login: "evelyn",
    password: "1234" 
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private login: LoginProvider ) {
  }

  openTelaUsuario(username, password){
    this.login.getLogin(username, password).then((result)=>{
      console.log(result);
      this.navCtrl.setRoot(TelaUsuarioPage.name);

    }).catch((error:any)=>{
       console.log(error.error.erro.codigo)
    });

    }
  }


  
