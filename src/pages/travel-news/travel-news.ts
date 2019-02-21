import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-travel-news',
  templateUrl: 'travel-news.html',
})
export class TravelNewsPage {
  item: any;

  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
    this.item = navParams.data.item
  }

  ionViewDidLoad() {
    console.log(this.item)
  }
  sendComment(){
    console.log("send!")
  }
}
