import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, App} from 'ionic-angular';
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public app: App) {
  }

  ionViewDidLoad() {
  }
  logOut() {
    console.log(11);
    this.app.getRootNav().push(LoginPage);
  }
}
