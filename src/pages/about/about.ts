import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import {SettingPage} from "../setting/setting";
import {OrderPage} from "../order/order";

@Component({
  templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user: any;
  items = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.user = navParams.data;
    this.items = [
      {
        'title': '推荐有奖',
        'icon': 'contacts',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': '关于我们',
        'icon': 'information-circle',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': '常见问题',
        'icon': 'help',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': '意见反馈',
        'icon': 'hand',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      }
    ]
  }
  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsPage, { item: item });
  }
  setting() {
    this.navCtrl.push(SettingPage, {user: this.user})
  }

  finishOrder() {
    this.navCtrl.push(OrderPage, {userId: this.user['id']});
  }
}
