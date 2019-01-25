import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesMensagemPage } from '../detalhes-mensagem/detalhes-mensagem';
import { MensagemProvider } from '../../providers/mensagem/mensagem';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private mensagemProvider: MensagemProvider) {
     this.listaMensagem = new Array();
    console.log(this.id)
    this.controleBusca = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMensagemPage');

    this.controleBusca.valueChanges.debounceTime(400).subscribe(search => {

      this.setFiltraMensagens();

    });

    this.mensagemProvider.getMensagem(this.id).subscribe(

      (data) => {
        this.listaMensagem = data;
        this.array = this.listaMensagem;
        console.log(this.array)
      }, error => {
        console.log(error);
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