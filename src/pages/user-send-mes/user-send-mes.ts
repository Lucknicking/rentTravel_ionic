import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-ser/http-ser";

@Component({
  selector: 'page-user-send-mes',
  templateUrl: 'user-send-mes.html',
})
export class UserSendMesPage {

  mesContent: any;
  mesTitle: any;
  userId: number;
  path: String;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpSerProvider,
              private camera: Camera,
              private imagePicker: ImagePicker,
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
    let $this = this;
    const options: CameraOptions = {
      quality: 70,                                                   // 相片质量 0 -100
      destinationType: this.camera.DestinationType.FILE_URI,        // DATA_URL 是 base64   FILE_URL 是文件路径
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,   //有PICTURE VIDEO ALLMEDIA
      saveToPhotoAlbum: true,                                       // 是否保存到相册
      sourceType: this.camera.PictureSourceType.CAMERA,         //是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
    };

    this.camera.getPicture(options).then((imageData) => {
      console.log('got file: ' + imageData);

      $this.path = imageData;
      this.showToast("bottom", imageData);
      // this.showAlert(imageData)
    }, (err) => {
      // this.showToast("bottom", err);
      console.log(err);
    });

  }

  // 打开手机相册
  private openImgPicker() {
    const options:ImagePickerOptions ={
      maximumImagesCount:1,
      quality:50,
      outputType : 0  //默认为0，返回类型为file_url;为1,返回值为base64-encoded string
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (let i = 0; i < results.length; i++) {

        // let base64Image = 'data:image/jpeg;base64,' + results[i];
        this.showToast("bottom", results[i]);
        // this.showAlert(results[i]);
      }
    }, (err) => {
      alert('未进行照片选取～');
      //alert(err);
    });

  }

  mesSubmit() {
    let $this = this;
    let loading = this.loadingCtrl.create({
      content: '正在发送...'
    });
    if (this.mesTitle === "" || this.mesContent === "") {
      $this.showToast("top", "请检查表单");
      return;
    }
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
            // this.navCtrl.pop()
          }
        }
      ]
    });
    alert.present();
  }
}
