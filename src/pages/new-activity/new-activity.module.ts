import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewActivityPage } from './new-activity';

@NgModule({
  declarations: [
    NewActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(NewActivityPage),
  ],
  exports: [
    NewActivityPage
  ]
})
export class NewActivityPageModule {}
