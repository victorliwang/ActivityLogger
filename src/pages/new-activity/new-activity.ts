import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the NewActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-activity',
  templateUrl: 'new-activity.html',
})
export class NewActivityPage {
	private activity: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private formBuilder: FormBuilder) {

  	this.activity = this.formBuilder.group({
  		title: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
  		category: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
  		start: ['', Validators.required],
  		end: ['', Validators.required]
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewActivityPage');
  }

  saveActivity(){
    this.viewCtrl.dismiss(this.activity.value);
  }

}
