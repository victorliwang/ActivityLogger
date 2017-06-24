import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  now15 = this.nearest15Minutes().format('HH:mm');
  currentDate = moment().format('MMMM Do, YYYY');
  currentTime = moment().format('HH:mm');
  in7Hours = this.inXHours(7);
  in9Hours = this.inXHours(8);
  in15Hours = this.inXHours(15, false);
  inHalfHour = this.inXHours(.5);

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentNewActivityModal() {
    let newActivityModal = this.modalCtrl.create('NewActivityPage');
    newActivityModal.onDidDismiss(data => {
      console.log(data);
    });
    newActivityModal.present();
  }

  nearest15Minutes(){
    return moment().add("minutes", 15 - moment().minute() % 15);
  }

  inXHours(hours: number, fifteen = true) {
    if(fifteen) {
      return this.nearest15Minutes().add(hours, 'hour').format('HH:mm');
    }
    return moment().add(hours, 'hour').format('HH:mm');
  }

}
