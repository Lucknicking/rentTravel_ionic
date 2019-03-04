import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {

  user: any;
  constructor(public navCtrl: NavController,
              private http: HttpSerProvider,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
    this.user = navParams.data.user;
  }

  save() {
    let $this = this;
    let loading = this.loadingCtrl.create({
      content: '正在修改...'
    });
    this.http.post("api/edit/user/info", this.user, function (res, msg) {
      if (res.code === 0) {
        loading.dismiss();
        $this.showAlert("修改成功");
      } else {
        $this.showToast("top", res.msg);
        loading.dismiss();
      }
    }, function (msg) {
      loading.dismiss();
      $this.showToast("top", msg.message);
    })
  }

  changeImg() {
    this.showToast("bottom", "功能暂未开放")
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
          }
        }
      ]
    });
    alert.present();
  }

}
