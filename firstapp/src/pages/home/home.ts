import { Component } from '@angular/core';
import { NavController,AlertController,ModalController } from 'ionic-angular';
import {TextPage} from '../text/text';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 pet: string = "kittens";
 openModal() {

    let modal = this.modalCtrl.create(TextPage);
    modal.present();
  }

  constructor(public navCtrl: NavController,

  	          private alertCtrl:AlertController,
              private modalCtrl:ModalController ) 
  {

  }
done() {
    let alert = this.alertCtrl.create({
      title: '开心',
      subTitle: '欢迎点我！',
      buttons: ['确定']
    });
    alert.present();
  }
  
}
