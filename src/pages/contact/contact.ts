import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FindPage } from '../find/find';
import { TravelNewsPage } from '../travel-news/travel-news';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  tabRoots: Object[];

  constructor(public navCtrl: NavController) {

    this.tabRoots = [
      {
        root: FindPage,
        tabTitle: '游记'
      },
      {
        root: TravelNewsPage,
        tabTitle: '探索'
      }
    ];
  }

}
