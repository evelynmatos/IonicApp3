import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesPostPage } from './detalhes-post';

@NgModule({
  declarations: [
    DetalhesPostPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesPostPage),
  ],
})
export class DetalhesPostPageModule {}
