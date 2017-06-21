import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  now = moment();
  currentDate = this.now.format('MMMM Do, YYYY');
  currentTime = this.now.format('HH:mm');
  nearest15min = this.nearestMinutes(15, this.now);
  inFutureHours = this.nearestMinutes(15, this.now.add(7, 'hour'));
  
  formattedFuture = this.inFutureHours.format('HH:mm');
  formatted15 = this.nearest15min.format('HH:mm');

  constructor(public navCtrl: NavController) {

  }

  nearestMinutes(interval, someMoment){
  	const roundedMinutes = Math.round(someMoment.clone().minute() / interval) * interval;
  	return someMoment.clone().minute(roundedMinutes).second(0);
  }

}
