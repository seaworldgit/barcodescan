import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  inventory = { barcode: '', assetNo: '', targetAsset: '', auditPlace: '', hasAsset: '', storePlan: '', storeDate:''};

  public myDate: string = new Date().toISOString();
  barcode:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
   this.barcode = navParams.get('text');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
    this.inventory.barcode=this.barcode;
  }

  saveInventory() {
    console.log("this is submit");
    this.restProvider.saveInventory(this.inventory).then((result) => {
      alert("insert success!!" + result);
      console.log(result);
    }, (err) => {
      alert("insert failed!!" + err);
      console.log(err);
    });
  }
}
