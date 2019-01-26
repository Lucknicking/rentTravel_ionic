import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { HttpSerProvider } from "../../providers/http-ser/http-ser"

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  phone:any;
  userName:any;
  password:any;
  confirmPassword:any;
  email:any;
  bolConfirm:boolean = false;

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private http: HttpSerProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  gotoLogin() {
    this.navCtrl.pop()
  }
  doRegister() {
    let $this = this;
    let loading = this.loadingCtrl.create({
      content: '正在注册...'
    });
    if(this.password != this.confirmPassword){
      this.showToast("top", "两次输入的密码不匹配！")
    } else {
      let data = {"userName": this.userName,"password":this.password,"phone": this.phone,"email": this.email};
      loading.present();
      this.http.post("api/register", data, function (res, msg) {
        if (res.code === 0) {
          loading.dismiss();
          $this.showAlert("注册成功，请返回登录页面！");
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
            this.navCtrl.pop()
          }
        }
      ]
    });
    alert.present();
  }
}
