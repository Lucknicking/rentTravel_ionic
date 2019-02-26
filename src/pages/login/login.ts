import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { HttpSerProvider } from "../../providers/http-ser/http-ser"
import { RegisterPage } from "../register/register"

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private http: HttpSerProvider,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    let $this = this;
    let loading = this.loadingCtrl.create({
      content: '正在登录...'
    });
    if (username.value.length == 0) {
    	this.showToast("bottom", "请输入账号");
    } else if (password.value.length == 0) {
        this.showToast("bottom", "请输入密码");
    } else {
        let data = {"userName": username.value,"password":password.value};
        loading.present();
        this.http.post("api/login", data, function (res, msg) {
          if (res.code === 0) {
            loading.dismiss();
            $this.showToast("bottom", "登录成功");
            $this.modalCtrl.create(TabsPage, { user: res.data }).present();
          } else {
            $this.showToast("top", res.msg);
            loading.dismiss();
          }
        }, function (msg) {
          loading.dismiss();
          $this.showToast("top", msg.message)
        })
  	}
  }
  registUser() {
    this.navCtrl.push(RegisterPage);
  }
  next() {
    let loading = this.loadingCtrl.create({
      content: '正在登录...',
      duration: 3000, //单位是毫秒
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      // this.navCtrl.setRoot(TabsPage);
      this.navCtrl.push(TabsPage)
    }, 10);
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
