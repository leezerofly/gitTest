import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})
export class TextPage {
  constructor(public navCtrl: NavController) 
  {

  }
// done() {
//     let alert = this.alertCtrl.create({
//       title: '开心',
//       subTitle: '欢迎点我！',
//       buttons: ['确定']
//     });
//     alert.present();
//   }
//   openModal() {

//     let modal = this.modalCtrl.create(Testpage);
//     modal.present();
//   }


}
