import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = [
      {
        title: "帐篷1",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/tent1.jpg",
        productCheap: "150.00"
      },
      {
        title: "登山鞋",
        productPrice: "90.00",
        imgUrl: "../../assets/imgs/shoes2.jpg",
        productCheap: "60.00"
      },
      {
        title: "球鞋",
        productPrice: "80.00",
        imgUrl: "../../assets/imgs/shoes1.jpg",
        productCheap: "70.00"
      },
      {
        title: "西装租赁",
        productPrice: "150.00",
        imgUrl: "../../assets/imgs/suits1.jpg",
        productCheap: "120.00"
      },
      {
        title: "强光手电筒",
        productPrice: "20.00",
        imgUrl: "../../assets/imgs/flash1.jpg",
        productCheap: "15.00"
      },
      {
        title: "尼康相机",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/camera1.jpg",
        productCheap: "190.00"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  goDetails(p: any) {
    console.log(p)
  }

}
