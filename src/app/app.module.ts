import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {MyApp} from './app.component';

import {AboutPage, NavigationDetailsPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {RegisterPage} from '../pages/register/register';
import {LoginPage} from '../pages/login/login';
import {ActivityPage} from '../pages/activity/activity';
import {GoodsDetailPage} from '../pages/goods/goodsDetail';
import {TravelNewsPage} from '../pages/travel-news/travel-news';
import {UserSendMesPage} from "../pages/user-send-mes/user-send-mes";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpSerProvider} from '../providers/http-ser/http-ser';
import {ProductListPage} from "../pages/product-list/product-list";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    NavigationDetailsPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ActivityPage,
    GoodsDetailPage,
    RegisterPage,
    TravelNewsPage,
    UserSendMesPage,
    ProductListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: 'true' // ionic2隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    NavigationDetailsPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ActivityPage,
    GoodsDetailPage,
    TravelNewsPage,
    UserSendMesPage,
    ProductListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpSerProvider
  ]
})
export class AppModule {
}
