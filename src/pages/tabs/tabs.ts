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
        root: ActivityPage,
        tabTitle: '活动',
        tabIcon: 'information'
      },
      {
        root: ContactPage,
        tabTitle: '探索',
        tabIcon: 'eye'
      },
      {
        root: AboutPage,
        tabTitle: '我的',
        tabIcon: 'person'
      }
    ];
  }
}
