import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  now15 = this.nearest15Minutes().format('HH:mm');
  currentDate = moment().format('MMM Do');
  currentDateFull = moment().format('MMMM Do, YYYY');
  currentTime = moment().format('HH:mm');
  in7Hours = this.inXHours(7);
  in9Hours = this.inXHours(8);
  in15Hours = this.inXHours(15, false);
  inHalfHour = this.inXHours(.5);
  lastActivity = {
    start: this.inXHours(-1),
    end: this.inXHours(0)
  };

  hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  nextActivity = {
    start: this.lastActivity.end
  }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentNewActivityModal() {
    let newActivityModal = this.modalCtrl.create('NewActivityPage', this.nextActivity);
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
