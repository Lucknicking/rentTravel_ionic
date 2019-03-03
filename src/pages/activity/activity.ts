import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  carList: any;
  userId: any;
  totalPrice: number;

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              private http: HttpSerProvider,
              public navParams: NavParams) {
    this.userId = navParams.data['id'];
  }

  ionViewDidEnter() {
    let $this = this;
    this.http.get("/api/goods/car/list", {userId: this.userId}, function (res, msg) {
      if (res.code === 0) {
        $this.carList = res.data;
        $this.numAllPrice();
      }
    }, function (msg) {
      $this.showAlert("亲，加载失败")
    });
  }

  /**
   * 商品添加
   */
  addNum(item) {
    let $this = this;
    this.http.get("/api/goods/add/car", {
      goodsId: item.goodsId,
      userId: this.userId,
      num: item.num
    }, function (res, msg) {
      if (res.code === 0) {
        item.num = item.num + 1;
        $this.numAllPrice();
      }
    }, function (msg) {
      $this.showAlert("添加失败")
    });
  }

  /**
   * 商品减少
   */
  reduceNum(item, i) {
    let $this = this;
    this.http.get("/api/goods/reduce/car", {
      id: item.id,
      goodsId: item.goodsId,
      userId: this.userId,
      num: item.num - 1
    }, function (res, msg) {
      if (res.code === 0) {
        if (item.num === 1) {
          $this.carList.splice(i, 1);
        }
        item.num = item.num - 1;
        $this.numAllPrice();
      }
    }, function (msg) {
      $this.showAlert("减少失败")
    });
  }

  /**
   * 计算所有商品价格
   */
  numAllPrice() {
    this.totalPrice = 0;
    this.carList.forEach(it => {
      this.totalPrice = this.totalPrice + it.num * it.realPrice
    });
  }

  /**
   * 删除商品
   */
  deleteProduct(item, i) {
    let $this = this;
    this.http.get("/api/goods/delete/car", {
      id: item.id,
      goodsId: item.goodsId,
      userId: this.userId,
      num: item.num
    }, function (res, msg) {
      if (res.code === 0) {
        $this.carList.splice(i, 1);
        $this.numAllPrice();
      }
    }, function (msg) {
      $this.showAlert("删除失败")
    });
  }

  /**
   * 弹出提示
   */
  showConfirm(item, i) {
    let confirm = this.alertCtrl.create({
      title: '温馨提示',
      message: '是否要删除该商品?',
      buttons: [
        {
          text: '再想想',
          handler: () => {
          }
        },
        {
          text: '是的',
          handler: () => {
            this.deleteProduct(item, i);
            this.numAllPrice();
          }
        }
      ]
    });
    confirm.present();
  }

  buyThisGoods() {
    let $this = this;
    let data = [];
    this.carList.forEach(it => {
      let item = {userId: null, carId: null, goodsId: null, count: null, price: null};
      item.userId = this.userId;
      item.carId = it.id;
      item.goodsId = it.goodsId;
      item.count = it.num;
      item.price = it.realPrice;
      data.push(item);
    });
    this.http.post("api/buy/goods", data, function (res, msg) {
      if (res.code === 0) {
        $this.showToast("bottom", "下单成功");
      } else {
        $this.showToast("top", res.msg);
      }
    }, function (msg) {
      $this.showToast("top", msg.message)
    })
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: "提示",
      message: message,
      buttons: [
        {
          text: '确认',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

}
