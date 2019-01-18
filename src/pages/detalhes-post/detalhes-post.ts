import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-post',
  templateUrl: 'detalhes-post.html',
})
export class DetalhesPostPage {

  item= this.navParams.get('item');

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
    console.log(this.item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesMensagemPage');
  }

}
