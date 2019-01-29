import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { LoginPage } from '../login/login';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ListaPostPage } from '../lista-post/lista-post';
import { PostProvider } from '../../providers/post/post';
import { StorageProvider } from '../../providers/storage/storage';

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
    PostProvider,
    StorageProvider
  ]
})
export class TelaUsuarioPage {

  post: any;
  user: any;
  public sigla;
  public foto: any;
  id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postProv: PostProvider, private storage: StorageProvider) {
  }


  ngOnInit() {
    this.storage.getUsuario().then(result => {
      this.user = (result);
      console.log(this.user)
      this.getSigla();
      this.getImagem();
    })
  }

  ionViewWillEnter(){
    this.getImagem();
  }


  getSigla() {
    let res = this.user.nome.split(" ")
    let nome = res[0].charAt(0)
    let sobrenome = res[res.length - 1].charAt(0)
    this.sigla = nome + sobrenome

  }

  getImagem(){
    this.storage.getFoto(String(this.id)).then(result=> {
      this.foto = result;
      console.log(this.foto);
    })
  }

  openListaMensagem() {
    this.navCtrl.push(ListaMensagemPage.name, { 'id': this.user.id });
  }

  openLogout() {
    this.storage.remover();
    this.navCtrl.setRoot(LoginPage.name);
  }

  openListaPost() {
    this.navCtrl.push(ListaPostPage.name);
  }

  openAlterarFoto() {
    console.log(this.user.id)
    this.navCtrl.push(AlterarFotoPage.name, {'id': this.user.id});
  }

  ionViewDidLoad() {
    this.postProv.getLatestPost().subscribe(
      (data) => {
        this.post = data;
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

}
