import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, ToastController} from 'ionic-angular';
import {GoodsDetailPage} from "../goods/goodsDetail"
import {ProductListPage} from "../product-list/product-list"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchMes: any;
  item: any;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
    this.item = {
      title: "帐篷1",
      productPrice: "200.00",
      imgUrl: "../../assets/imgs/tent1.jpg",
      productCheap: "150.00",
      imgUrls: ["../../assets/imgs/tent1.jpg", "../../assets/imgs/tent1.jpg", "../../assets/imgs/tent1.jpg"]
    }
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
    this.navCtrl.push(GoodsDetailPage, {item: this.item});
  }

  productList() {
    this.navCtrl.push(ProductListPage);
  }

  searchDetail(ev: any) {
    this.showToast("bottom", "点击搜索")
    console.log(11)
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

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
}
