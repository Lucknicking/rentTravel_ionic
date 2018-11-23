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
        tabTitle: '发现',
        tabIcon: 'eye'
      },
      {
      	root: ActivityPage,
      	tabTitle: '活动',
      	tabIcon: 'information'
      },
      {
        root: AboutPage,
        tabTitle: '我的',
        tabIcon: 'person'
      }
    ];
  }
}