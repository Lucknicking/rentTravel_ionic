import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import { GoodsDetailPage } from "../goods/goodsDetail"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchMes: any;
  constructor(public navCtrl: NavController) {
  }

  @ViewChild('slides') slides: Slides;

  //页面进入时启动自动播放
  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
    this.slides.startAutoplay();
  }


  //页面离开时停止自动播放


  ionViewDidLeave() {
    this.slides.stopAutoplay();
  }

  getItems(ev: any) {
    // let searchText = ev.target.value;
    // console.log(searchText)
  }

  detailInfo() {
    this.navCtrl.push(GoodsDetailPage);
  }

  searchDetail(ev: any) {
    /*this.http.post("api/register", data, function (res, msg) {
      if (res.code === 0) {
        loading.dismiss();
        $this.showAlert("注册成功，请返回登录页面！");
      } else {
        $this.showToast("top", res.msg);
        loading.dismiss();
      }
    }, function (msg) {
      loading.dismiss();
      $this.showToast("top", msg.message);
    })*/
  }
}
