import {Component} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { HttpSerProvider } from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-user-send-mes',
  templateUrl: 'user-send-mes.html',
})
export class UserSendMesPage {

  mesContent: any;
  mesTitle: any;
  userId: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpSerProvider,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              public actionsheetCtrl: ActionSheetController) {
    this.userId = navParams.data.userId;
  }

  ionViewDidLoad() {
  }

  useASComponent() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '选择',
      buttons: [
        {
          text: '拍照',
          role: 'destructive',
          handler: () => {
            console.log('拍照');
            this.startCamera();
          }
        },
        {
          text: '从相册选择',
          handler: () => {
            console.log('从相册选择');
            this.openImgPicker();
          }
        },
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // 启动拍照功能
  private startCamera() {
    console.log('开发中...');
  }

  // 打开手机相册
  private openImgPicker() {
    console.log('开发中...');
  }

  mesSubmit() {
    let $this = this;
    let loading = this.loadingCtrl.create({
      content: '正在发送...'
    });
    let data = {"userId": this.userId, "title": this.mesTitle, "content": this.mesContent};
    loading.present();
    this.http.post("api/news/send", data, function (res, msg) {
      if (res.code === 0) {
        loading.dismiss();
        $this.showAlert("发布成功，请返回动态列表页面！");
      } else {
        $this.showToast("top", res.msg);
        loading.dismiss();
      }
    }, function (msg) {
      loading.dismiss();
      $this.showToast("top", msg.message);
    })
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
