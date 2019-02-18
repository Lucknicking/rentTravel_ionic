import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goodsDetail.html',
})
export class GoodsDetailPage {
  selectedItem: any;
  imgs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = this.navParams.get("item");
    if (this.selectedItem.imgUrls) {
      this.imgs = this.selectedItem.imgUrls;
    }
  }

  ionViewDidLoad() {
  }

  buyItem(productItem: any) {

  }

}
