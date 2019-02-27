import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-travel-news',
  templateUrl: 'travel-news.html',
})
export class TravelNewsPage {
  item: any;
  comment: any;
  currentUserId: number;
  commentsList: any;

  constructor(public navParams: NavParams,
              private http: HttpSerProvider,
              public alertCtrl: AlertController,
              public navCtrl: NavController) {
    this.item = navParams.data.item;
    this.currentUserId = navParams.data.currentUserId;
  }

  ionViewDidLoad() {
    // 获取评论列表
    let $this = this;
    this.http.get("/api/news/comment/list", {newsId: this.item.id}, function (res, msg) {
      if (res.code === 0 && res.data) {
        $this.commentsList = res.data;
      }
    }, function (msg) {
    });
  }

  sendComment() {
    let $this = this;
    if (this.comment && this.comment !== "") {
      let data = {userId: this.currentUserId, newsId: this.item.id, comments: this.comment};
      this.http.post("/api/news/send/comment", data, function (res, msg) {
        if (res.code === 0) {
          $this.commentsList = res.data;
          $this.comment = "";
          $this.item.totalComment = $this.item.totalComment + 1
        } else {
        }
      }, function (msg) {
      })
    } else {
      return;
    }
  }
  // 点赞功能
  approvel() {
    let $this = this;
    this.http.get("/api/news/approvel", {"userId": this.currentUserId, "newsId": this.item.id}, function (res, msg) {
      if (res.code === 0 && res.data) {
        $this.item.totalZan = $this.item.totalZan + 1;
      } else if (res.code === 0) {
        $this.item.totalZan = $this.item.totalZan - 1;
      }
    }, function (msg) {
    });
  }

  /**
   * 删除评论
   */
  deleteComment(commentId: number) {
    let $this = this;
    this.http.post("/api/news/comment/delete", {id: commentId, newsId: this.item.id, userId: this.currentUserId}, function (res, msg) {
      if (res.code === 0) {
        $this.commentsList = res.data;
        $this.item.totalComment = $this.item.totalComment - 1
      }
    }, function (msg) {
    });
  }

  showConfirm(commentId: number) {
    let confirm = this.alertCtrl.create({
      title: '温馨提示',
      message: '是否要删除该评论?',
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
            this.deleteComment(commentId);
          }
        }
      ]
    });
    confirm.present();
  }
}
