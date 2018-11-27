import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private http: HttpClient,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public navParams: NavParams,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
    	this.showToast("bottom", "请输入账号");
    } else if (password.value.length == 0) {
        this.showToast("bottom", "请输入密码");
    } else {
        let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
        alert(userinfo);
        var data = {"userName": username.value,"password":password.value};
        this.http.post("/api/login", data).subscribe(data => {
        	console.log(data);
        });
	    this.navCtrl.push(TabsPage);
  	}
  }
  next() {
    let loading = this.loadingCtrl.create({
      content: '正在登录...',
      duration: 3000, //单位是毫秒
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.push(TabsPage);
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
