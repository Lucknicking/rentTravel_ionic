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
        title: "帐篷1",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/tent1.jpg",
        productCheap: "150.00"
      },
      {
        title: "帐篷1",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/tent1.jpg",
        productCheap: "150.00"
      },
      {
        title: "帐篷1",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/tent1.jpg",
        productCheap: "150.00"
      },
      {
        title: "帐篷1",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/tent1.jpg",
        productCheap: "150.00"
      },
      {
        title: "帐篷1",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/tent1.jpg",
        productCheap: "150.00"
      },
      {
        title: "帐篷1",
        productPrice: "200.00",
        imgUrl: "../../assets/imgs/tent1.jpg",
        productCheap: "150.00"
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
