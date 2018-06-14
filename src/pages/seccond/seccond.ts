import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { BrowserBarcodeReader } from '@zxing/library';
import { ThirdPage } from '../third/third';


@IonicPage()
@Component({
  selector: 'page-seccond',
  templateUrl: 'seccond.html',
})
export class SeccondPage {
  path: string;
  bacode:string;
  elemenId:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public picker: ImagePicker) {
  }

  ionViewDidLoad() {
    // this.navParams.get('barcode');
    console.log('ionViewDidLoad SeccondPage');
  }

  choosePicture() {
    let option = {
      title: "select picture",
      message: "select least 1 picture",
      maximumImagesCount: 1,
      outType: 0
    };

    this.picker.getPictures(option).then(result => {
      for (var i = 0; i < result.length; i++) {
        this.path = result[i];
        this.decode(this.elemenId);
        alert("gallery path:" + result[i]);
      }
      this.navCtrl.push(ThirdPage,{barcode:"123barcode"});
    }, err => {
      alert("error:" + err);
      this.navCtrl.push(ThirdPage,{barcode:"123barcode"});
    })
  }

  decode(elementId: string) {
    const codeReader = new BrowserBarcodeReader();
    // const picture = document.getElementById("img");
    codeReader.decodeFromImage(elementId)
      .then(result => {
        this.setBarcode(result);
        console.log(result);
      })
      .catch(err => console.error(err));
  }

  setBarcode(any) {
    this.bacode=any;
  }

  launchSecondPage(){

  }
}
