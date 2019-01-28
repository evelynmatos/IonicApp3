import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMensagemPage } from '../lista-mensagem/lista-mensagem';
import { LoginPage } from '../login/login';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ListaPostPage } from '../lista-post/lista-post';
import { PostProvider } from '../../providers/post/post';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';



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
  public sigla;
  user = this.navParams.get("user");
  public loader;


  constructor(public navCtrl: NavController, public navParams: NavParams, private postProv: PostProvider,
    private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
      
    }
    abreCarregando() {
      this.loader = this.loadingCtrl.create({
          content: "Carregando tela de usuário...",
        });
        this.loader.present();
      }
    
      fechaCarregando(){
        this.loader.dismiss();
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
      let alert = this.alertCtrl.create({
        title: 'Confirmar logout',
        message: 'Deseja sair da sessão?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Sessão Cancelada');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              console.log('Sessão finalizada');
            }
          }
        ]
      });
      alert.present();
    }
    

    openListaPost() {
      this.navCtrl.push(ListaPostPage.name);
    }

    openAlterarFoto() {
      this.navCtrl.push(AlterarFotoPage.name);
    }

    ionViewDidEnter() {
      this.abreCarregando(); 
      console.log(this.user)
      this.postProv.getLatestPost().subscribe(
        (data) => {
          this.post = data;
          console.log(data);
          this.fechaCarregando();
        }, error => {
          console.log(error);
          this.fechaCarregando();
        })
    }

  }
