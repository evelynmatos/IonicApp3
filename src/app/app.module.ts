import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { LoginPageModule } from '../pages/login/login.module';
import { LoginProvider } from '../providers/login/login';
import { PostProvider } from '../providers/post/post';
import { HttpClientModule } from '@angular/common/http';
import { MensagemProvider } from '../providers/mensagem/mensagem';
import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/storage';
import { TelaUsuarioPageModule } from '../pages/tela-usuario/tela-usuario.module';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    LoginPageModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TelaUsuarioPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    PostProvider,
    MensagemProvider,
    StorageProvider,
    Camera
  ]
})
export class AppModule {}
