import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SeccondPage } from '../pages/seccond/seccond';
import { ThirdPage } from '../pages/third/third';
import { ImagePicker } from '@ionic-native/image-picker';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SeccondPage,
    ThirdPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SeccondPage,
    ThirdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    HttpClientModule,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})

export class AppModule {}
