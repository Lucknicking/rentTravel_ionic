import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the TravelNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-travel-news',
  templateUrl: 'travel-news.html',
})
export class TravelNewsPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelNewsPage');
  }

}
