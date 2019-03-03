import {Component, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams, Slides, ToastController} from 'ionic-angular';
import {GoodsDetailPage} from "../goods/goodsDetail"
import {ProductListPage} from "../product-list/product-list"
import {HttpSerProvider} from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchMes: any;
  item: any;
  user: any;
  especialList: any;
  constructor(public navCtrl: NavController,
              private http: HttpSerProvider,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController) {
    this.user = navParams.data
  }

  @ViewChild('slides') slides: Slides;

  //页面进入时启动自动播放
  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
    this.slides.startAutoplay();
    let $this = this;
    this.http.get("api/especial/goods_list", {}, function (res, msg) {
      if (res.code === 0) {
        $this.especialList = res.data;
      }
    }, function (msg) {
    })
  }


  //页面离开时停止自动播放
  ionViewDidLeave() {
    this.slides.stopAutoplay();
  }

  detailInfo(item: any) {
    var reg = /^["|'](.*)["|']$/g;
    if (item.detailImg === "" || item.detailImg === null) {
      item.detailImg = []
    } else {
      item.detailImg = item.detailImg.replace(reg,"$1").split(',');
    }
    this.navCtrl.push(GoodsDetailPage, {item: item,userId: this.user['id']});
  }

  productList() {
    this.navCtrl.push(ProductListPage);
  }

  searchDetail(ev: any) {
    if("Enter"==ev.key) {
      this.showToast("bottom", "点击搜索");
    }
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: "提示",
      message: message,
      buttons: [
        {
          text: '确认',
          handler: () => {
            // this.navCtrl.pop()
          }
        }
      ]
    });
    alert.present();
  }
}
