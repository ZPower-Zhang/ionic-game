import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public curBlock = null
  public curBlockArray = new Array()

  public submitParams = ''

  constructor(public navCtrl: NavController) {
    this.judegDid()
  }

  // 判断是否DiD登陆
  judegDid() {
    let appDid = window.localStorage.getItem('appDid')
    if(!appDid) {
      // 没有did登陆->跳转
      return false
    }
  }

  goToHistory() {
    this.navCtrl.push(HistoryPage);
  }

  inputNum(val) {
    this.curBlock = null
    this.curBlock = val
    // this.curBlockArray.push(val)
    // this.curBlock = this.curBlockArray.join("")
  }

  submitToElastos() {
    console.log('11')
  }

}
