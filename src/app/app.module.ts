import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AboutPage, NavigationDetailsPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ActivityPage } from '../pages/activity/activity';
import { GoodsDetailPage } from '../pages/goods/goodsDetail';
import { TravelNewsPage } from '../pages/travel-news/travel-news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpSerProvider } from '../providers/http-ser/http-ser';

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
    TravelNewsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
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
    TravelNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpSerProvider
  ]
})
export class AppModule {}
