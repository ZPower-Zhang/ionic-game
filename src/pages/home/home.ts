import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

declare let cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private CreditRuleUrl: any = 'https://vote-test.elastos.org/games/stickrunning/index.html';

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.openIframe()
    // this.openWallet()
  }

  openWallet() {
    cordova.plugins.appmanager.StartApp(item.url + "?timestamp=" + new Date().getTime(),
        function (data) { },
        function (error) { });
  }

  openIframe(){
    this.CreditRuleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.CreditRuleUrl);
  }
}