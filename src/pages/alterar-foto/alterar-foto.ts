import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {

  public photo: string = ''
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private storage: StorageProvider) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AlterarFotoPage');
  }

  takePicture(tipo) {
     this.photo = '';


     const options: CameraOptions = {
     quality: 100,
     destinationType: this.camera.DestinationType.DATA_URL,
     encodingType: this.camera.EncodingType.JPEG,
     mediaType: this.camera.MediaType.PICTURE,
     sourceType: tipo =="foto" ?
      this.camera.PictureSourceType.CAMERA: 
      this.camera.PictureSourceType.PHOTOLIBRARY,
     allowEdit: false,
     targetWidth: 100,
     targetHeight: 100,
     saveToPhotoAlbum: true,
     correctOrientation: true
   }

   this.camera.getPicture(options)
   .then((imageData) => {
     this.photo = 'data:image/jpeg;base64,' + imageData
     this.storage.salvarFoto(String(this.id), this.photo);
     console.log(this.photo);
    });
     
   
   
}

}
