import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goodsDetail.html',
})
export class GoodsDetailPage {
  selectedItem: any;
  imgs: any;
  userId: any;

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private http: HttpSerProvider,
              public navParams: NavParams) {
    this.userId = navParams.get("userId");
    this.selectedItem = this.navParams.get("item");
    if (this.selectedItem.detailImg) {
      this.imgs = this.selectedItem.detailImg;
    }
  }

  ionViewDidLoad() {
  }

  buyItem(goodsItem: any) {
    let $this = this;
    this.http.get("/api/goods/add/car", {goodsId: goodsItem.id, userId: this.userId}, function (res, msg) {
      if (res.code === 0) {
        $this.showAlert("亲，添加成功，购物车中等你哦")
      }
    }, function (msg) {
      $this.showAlert("亲，添加失败")
    });
  }


  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: "提示",
      message: message,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            // this.navCtrl.pop()
          }
        }
      ]
    });
    alert.present();
  }
}
