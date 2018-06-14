import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrowserBarcodeReader } from '@zxing/library';
import { ThirdPage } from '../third/third';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  path: string;
  bacode: string;
  elemenId: string;

  data = {text:"123ABCabc"};
  option: BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {
    // this.path = "assets/imgs/logo.png";
    // this.bacode = "1234567890";
    // this.elemenId = "barcodeImg";
  }

  // choosePicture() {
  //   let option = {
  //     title: "select picture",
  //     message: "select least 1 picture",
  //     maximumImagesCount: 1,
  //     outType: 0
  //   };

  //   this.picker.getPictures(option).then(result => {
  //     for (var i = 0; i < result.length; i++) {
  //       this.path = result[i];
  //       this.decode(this.elemenId);
  //       alert("gallery path:" + result[i]);
  //     }
  //   }, err => {
  //     alert("error:" + err);
  //   })
  // }

  // decode(elementId: string) {
  //   const codeReader = new BrowserBarcodeReader();
  //   // const picture = document.getElementById("img");
  //   codeReader.decodeFromImage(elementId)
  //     .then(result => {
  //       this.setBarcode(result);
  //       console.log(result);
  //     })
  //     .catch(err => console.error(err));
  // }

  // setBarcode(any) {
  //   this.bacode = any;
  // }

  launchSecondPage() {
    let pdata = { pbacode: this.bacode };
    this.navCtrl.push(ThirdPage,{text:"123aaabbb"});
  }

  scan() {
    this.option = {
      prompt: "Please scan you code"
    }
    this.barcodeScanner.scan(this.option).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      this.navCtrl.push(ThirdPage,this.data);
    }, (err) => {
      console.log('Error', err);
      alert("scan failed!");
      this.navCtrl.push(ThirdPage,this.data);
    });
  }
}
