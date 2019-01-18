import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalhesPostPage } from '../../pages/detalhes-post/detalhes-post';

@Component({
  selector: 'comp-post',
  templateUrl: 'comp-post.html'
})
export class CompPostComponent {

  @Input()
  feed;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello CompPostComponent Component');
  }
  
  
  openDetalhesPost(){
      this.navCtrl.push(DetalhesPostPage.name,{'item': this.feed}) 
      console.log(this.feed)
  
      }
 
}