import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  public salvarUsuario(usuario){
    return this.storage.set('usuario', usuario);
  }

  public getUsuario(){
    return this.storage.get('usuario');
  }

  public remover(){
    return this.storage.remove('usuario');
  }

  public salvarFoto(id, foto){
    return this.storage.set(String(id), foto);
  }

  public getFoto(id){
    return this.storage.get(String(id));
  }

  public lembrar(usuario){
    return this.storage.set('lembrar', usuario)
  }

  public getLembrar(){
    return this.storage.get('lembrar');
  }

  public removeLembrar(){
    return this.storage.remove('lembrar');
  }

}
