import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
  }

}
