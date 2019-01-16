import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaUsuarioPage } from './tela-usuario';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TelaUsuarioPage
  ],
  imports: [
    IonicPageModule.forChild(TelaUsuarioPage),
    ComponentsModule
  ],
})
export class TelaUsuarioPageModule {}
