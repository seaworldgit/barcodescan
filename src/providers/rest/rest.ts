import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {
  apiUrl = 'http://192.168.30.26:8080/imart/sample/barcodescan/insert';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  saveInventory(data) {

    return new Promise((resolve, reject) => {
      // let headers = new HttpHeaders();

      // headers.append('Content-Type','application/json');
      // headers.append('Access-Control-Allow-Origin','*');
    this.http.post(this.apiUrl, data).subscribe(
        res => {
          console.log("登録成功");
          resolve(res);
        }, (err) => {
          console.log("登録失敗");
          reject(err);
        }
      );
    });

  }

}
