import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentDate = moment().format('MMMM Do, YYYY');
  currentTime = moment().format('hh:mm');
  timeInThirty = moment().add(7, 'hour').format('hh:mm');

  constructor(public navCtrl: NavController) {

  }

}
