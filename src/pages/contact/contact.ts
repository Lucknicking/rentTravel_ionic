import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import { UserSendMesPage } from "../user-send-mes/user-send-mes";
import {HttpSerProvider} from "../../providers/http-ser/http-ser";
import {TravelNewsPage} from "../travel-news/travel-news";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: Object;
  userName: string;
  newsList: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpSerProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
    this.user = navParams.data;
  }
  ionViewDidLoad() {
    let $this = this;
    let loading = this.loadingCtrl.create({
      content: '正在加载...'
    });
    this.http.get("/api/news/list", {}, function (res, msg) {
      if (res.code === 0) {
        $this.newsList = res.data;
        loading.dismiss();
      } else {
        $this.showToast("top", res.msg);
        loading.dismiss();
      }
    }, function (msg) {
      loading.dismiss();
      $this.showToast("top", msg.message);
    })
  }
  uploadMes() {
    this.navCtrl.push(UserSendMesPage, {userId: this.user['id']})
  }

  //下拉刷型界面
  doRefresh(refresher){
    let $this = this;
    this.http.get("/api/news/list", {}, function (res, msg) {
      if (res.code === 0) {
        $this.newsList = res.data;
        refresher.complete();
        $this.showToast("bottom", "加载成功")
      }
    }, function (msg) {
      refresher.complete();
      $this.showToast("top", msg.message);
    });
  }

  // 点赞功能
  approvel(currentNewId: any) {
    let $this = this;
    this.http.get("/api/news/approvel", {userId: this.user['id'], newsId: currentNewId}, function (res, msg) {
      if (res.code === 0 && res.data) {
        $this.newsList.forEach(it => {
          if(it.id === currentNewId) {
            it.totalZan = it.totalZan + 1;
          }
        })
      } else if (res.code === 0) {
        $this.newsList.forEach(it => {
          if(it.id === currentNewId) {
            it.totalZan = it.totalZan - 1;
          }
        })
      }
    }, function (msg) {
    });
  }

  deleteNew(newId: number) {
    let $this = this;
    this.http.post("/api/news/delete", {"id": newId, userId: this.user['id']}, function (res, msg) {
      if (res.code === 0) {
        $this.newsList = res.data;
      }
    }, function (msg) {
    });
  }

  commentNew(news: any){
    this.navCtrl.push(TravelNewsPage, {item: news, currentUserId: this.user['id']});
    console.log(news)
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
  showConfirm(newId: number) {
    let confirm = this.alertCtrl.create({
      title: '温馨提示',
      message: '是否要删除该动态?',
      buttons: [
        {
          text: '再看看',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '是的',
          handler: () => {
            this.deleteNew(newId);
          }
        }
      ]
    });
    confirm.present();
  }
}
