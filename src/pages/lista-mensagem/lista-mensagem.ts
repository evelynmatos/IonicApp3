import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesMensagemPage } from '../detalhes-mensagem/detalhes-mensagem';
import { MensagemProvider } from '../../providers/mensagem/mensagem';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-mensagem',
  templateUrl: 'lista-mensagem.html',
})
export class ListaMensagemPage {

  public listaMensagem:any ;
  public id = this.navParams.get('id');
  public search: string = ' ';
  public controleBusca: FormControl;
  public array:Array<any>;
  public loader;
  public refresher;
  public isRefresher: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private mensagemProvider: MensagemProvider,
    public loadingCtrl: LoadingController) {
      
     this.listaMensagem = new Array();
    console.log(this.id)
    this.controleBusca = new FormControl();
  }

  abreCarregando() {
  this.loader = this.loadingCtrl.create({
      content: "Carregando mensagens...",
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefresher = true;
    this.carregarMensagens();

  }
  ionViewDidEnter() {
    this.carregarMensagens();

  }
    carregarMensagens(){
    console.log('ionViewDidLoad ListaMensagemPage');
    this.abreCarregando()
    this.controleBusca.valueChanges.debounceTime(400).subscribe(search => {
      this.setFiltraMensagens();

    });

    this.mensagemProvider.getMensagem(this.id).subscribe(

      (data) => {
        this.listaMensagem = data;
        this.array = this.listaMensagem;
        console.log(this.array)
        this.fechaCarregando();
        if(this.isRefresher){
          this.refresher.complete();
          this.isRefresher = false;
        }
      }, error => {
        console.log(error);
        this.fechaCarregando();
        if(this.isRefresher){
          this.refresher.complete();
          this.isRefresher = false;
        }
      }
    )

  }
  openDetalhesMensagem(mensagem) {
    this.navCtrl.push(DetalhesMensagemPage.name, { 'mensagem': mensagem });
  }

  
  setFiltraMensagens() {
    this.array = this.buscaItem(this.search);
  }

  buscaItem(search) {
    return this.listaMensagem.filter((mensagem) => {
      return mensagem.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }


}