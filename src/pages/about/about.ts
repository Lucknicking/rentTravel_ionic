import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items = [];
  constructor(public navCtrl: NavController) {
    this.items = [
      {
        'title': '推荐有奖',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': '关于我们',
        'icon': 'angular',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': '常见问题',
        'icon': 'angular',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': '意见反馈',
        'icon': 'angular',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      }
    ]
  }
  openNavDetailsPage(item) {
    console.log(1)
  }
}
