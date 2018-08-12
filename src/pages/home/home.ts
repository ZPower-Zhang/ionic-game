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

  public subMitPrefix = 'chinajoylottery' // 提交链接前缀
  public subMitSubfix = 'EbCarQQTxYAp1MBfPjXZorF4FTgsqJaK5n' // 猜中后的链接后缀
  public subMitAppSeret = 'appseret' // AppSeret

  public submitParams = null

  constructor(public navCtrl: NavController) {
    this.judegDid()
    this.initData()
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
  
  // 判断是否猜中
  judegGuessRight() {
    if () {
      return true
    } else {
      return false
    }
  }

  submitToElastos() {
    if(!this.curBlock) {
      return false
    }

    // 如果猜中
    if(this.judegGuessRight()) {
      this.submitParams = this.subMitPrefix + '-' + this.curBlock + '-' + this.subMitSubfix + '-' + this.subMitAppSeret
    } else {
      this.submitParams = this.subMitPrefix + '-' + this.curBlock + '-' + this.subMitAppSeret
    }

    this.goONNext()
  }

  // 提交的操作
  goONNext() {
  
    this.initData()
  }

  // 初始化数据
  initData() {
    this.curBlock = null
    this.submitParams = null
  }

}
