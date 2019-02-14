import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ActivityPage } from '../activity/activity';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '首页',
        tabIcon: 'home'
      },
      {
        root: ContactPage,
        tabTitle: '探索',
        tabIcon: 'eye',
        tabBage: ''
      },
      {
        root: ActivityPage,
        tabTitle: '购物车',
        tabBage: '5',
        tabIcon: 'cart'
      },
      {
        root: AboutPage,
        tabTitle: '我的',
        tabIcon: 'person',
        tabBage: ''

      }
    ];
  }
}
