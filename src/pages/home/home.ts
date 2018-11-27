import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  @ViewChild('slides') slides: Slides;
      //页面进入时启动自动播放
    ionViewDidEnter(){
    	this.slides.autoplayDisableOnInteraction = false;
      this.slides.startAutoplay();
    }


    //页面离开时停止自动播放


 ionViewDidLeave(){
    this.slides.stopAutoplay();
  }

  getItems(ev: any) {
    let searchText = ev.target.value;
    console.log(searchText)
  }
}
