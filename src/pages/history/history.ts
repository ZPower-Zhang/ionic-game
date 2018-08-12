import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  private CreditRuleUrl: any = 'https://fun-web.elastos.org/lotteryall?openid=oyZKC0ifHws9P4n-QKpatchmrvAc';

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.openIframe()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  openIframe(){
    this.CreditRuleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.CreditRuleUrl);
  }

}
