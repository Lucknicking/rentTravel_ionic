import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSendMesPage } from './user-send-mes';

@NgModule({
  declarations: [
    UserSendMesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSendMesPage),
  ],
})
export class UserSendMesPageModule {}
