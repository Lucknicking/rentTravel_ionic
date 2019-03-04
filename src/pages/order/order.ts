import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  finishList: any;
  userId: number;
  constructor(public navCtrl: NavController,
              private http: HttpSerProvider,
              public navParams: NavParams) {
    this.userId = navParams.data.userId;
  }

  ionViewDidEnter() {
    let $this = this;
    this.http.get("/api/order/finish/list", {userId: this.userId}, function (res, msg) {
      if (res.code === 0) {
        $this.finishList = res.data;
      }
    }, function (msg) {
    });
  }

}
