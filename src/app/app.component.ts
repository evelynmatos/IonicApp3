import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { StorageProvider } from '../providers/storage/storage';
import { TelaUsuarioPage } from '../pages/tela-usuario/tela-usuario';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: StorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.show();
      splashScreen.hide();
    });

    this.storage.getUsuario().then(result => {
      if(result){
        this.rootPage = TelaUsuarioPage;
      }else{
        this.rootPage = LoginPage;
      }
    })

  }
}

