import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, App} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserInfoPage} from "../user-info/user-info";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  user: any;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public app: App) {
    this.user = navParams.data.user;
  }

  ionViewDidLoad() {
  }

  logOut() {
    console.log(11);
    this.app.getRootNav().push(LoginPage);
  }
  editUserInfo() {
    this.navCtrl.push(UserInfoPage, {user: this.user});
  }
}
