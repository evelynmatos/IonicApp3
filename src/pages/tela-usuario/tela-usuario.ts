import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { LoginPage } from '../login/login';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ListaPostPage } from '../lista-post/lista-post';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the TelaUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-usuario',
  templateUrl: 'tela-usuario.html',
  providers: [
    PostProvider
  ]
})
export class TelaUsuarioPage {

  post: any;
  user = this.navParams.get("user");
  public sigla;


  constructor(public navCtrl: NavController, public navParams: NavParams, private postProv: PostProvider) {
  }

  ngOnInit() {
    this.getSigla()
  }

  getSigla() {
    let res = this.user.nome.split(" ")
    let nome = res[0].charAt(0)
    let sobrenome = res[res.length - 1].charAt(0)
    this.sigla = nome + sobrenome

  }
  openListaMensagem() {
    this.navCtrl.push(ListaMensagemPage.name, { 'id': this.user.id });
    console.log(this.user.id)
  }

  openLogout() {
    this.navCtrl.setRoot(LoginPage.name);
  }

  openListaPost() {
    this.navCtrl.push(ListaPostPage.name);
  }

  openAlterarFoto() {
    this.navCtrl.push(AlterarFotoPage.name);
  }

  ionViewDidLoad() {
    console.log(this.user)
    this.postProv.getLatestPost().subscribe(
      (data) => {
        this.post = data;
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

}
