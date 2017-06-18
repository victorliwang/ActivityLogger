import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  dateFormatOptions = {
  	month: 'long', day: 'numeric', year: 'numeric'
  };

  date = new Date().toLocaleDateString('en-US', this.dateFormatOptions);

  constructor(public navCtrl: NavController) {

  }

}
