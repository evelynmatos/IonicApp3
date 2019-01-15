import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaUsuarioPage } from './tela-usuario';

@NgModule({
  declarations: [
    TelaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaUsuarioPage),
  ],
})
export class TelaUsuarioPageModule {}
