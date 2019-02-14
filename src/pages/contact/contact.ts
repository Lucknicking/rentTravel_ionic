import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserSendMesPage } from "../user-send-mes/user-send-mes";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: Object;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user = navParams.data;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    console.log(this.user);
  }
  uploadMes() {
    this.navCtrl.push(UserSendMesPage)
  }

}
