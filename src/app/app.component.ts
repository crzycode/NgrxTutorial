import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT, metaReducers } from 'mamta-medical-store';
import * as CryptoTS from 'crypto-ts';


import {Addtocart_action, Cartcount_action, Icon_action, Image_action, Medicinetype_action, Navigation_action, Productid_action, Search_action, Server_action, Transfer_action, logoutAction } from 'projects/mamta-medical-store/src/lib/Action/Store.action';
import {search_selector } from 'projects/mamta-medical-store/src/lib/Selector/Store.selector';
import { AppState, Search_state } from 'projects/mamta-medical-store/src/public-api';

// import { AppState, SearchState, isSearch_action, isSearch_selector, logoutAction, search_action, search_selector } from 'projects/mamta-medical-store/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Key:any = 'b14ca5898a4e4133bbce2ea2315a1916';
  constructor(private store:Store<AppState>) {
   this.store.dispatch(Addtocart_action({value:{data:"hellos"}}))
   this.store.dispatch(Search_action({value:"sdfsdf"}))
   this.store.dispatch(Medicinetype_action({value:"SFSF"}))
   this.store.dispatch(Image_action({value:{data:"hellos"}}))
   this.store.dispatch(Icon_action({value:1}))
   this.store.dispatch(Server_action({value:"sfsdfsfsdfsf"}))
  //  this.store.dispatch(logoutAction())
  //  this.store.dispatch(isSearch_action({value:true}))
  //  this.store.dispatch(Products_action({value:[{mangal:"sfsf"},{mangal:"sfsf"},{mangal:"sfsf"}]}))
  //  this.store.select(isSearch_selector).subscribe(res => console.log(res))
  //  this.store.select('Transfer').subscribe(res =>{

  //   console.log(res)
  //   // this.decryptUsingAES256()
  //   // this.encryptUsingAES256(obj)
  //   // this.decryptUsingAES256()
  //   // const encrypted = this.encryptionAES(JSON.stringify(obj));
  //   // const decrypted = this.decryptionAES("w+xLSIuL2bTSilDtmf0Nf8vYMhmTfmLeH6VQKHPCqyg=");
  //   // console.log(encrypted);
  //   // console.log(decrypted);
  //   // var dat = JSON.parse(decrypted);
  //   // console.log(dat);
  //  })
   this.store.select('Icon').subscribe(res => console.log(res))
   this.store.select('Image').subscribe(res => console.log(res))
   this.store.select('Server').subscribe(res => console.log(res))

  //  this.store.select('Products').subscribe(res => console.log(res))
  
  //  this.store.dispatch(logoutAction())
    
  }

  encryptUsingAES256(DATA:any) {
    let _key = CryptoTS.enc.Utf8.parse('b14ca5898a4e4133bbce2ea2315a1916');
    let _iv = CryptoTS.enc.Utf8.parse('1234567890123456');
    let encrypted = CryptoTS.AES.encrypt(JSON.stringify(DATA), _key, {
      iv: _iv,
      mode: CryptoTS.mode.CBC,
      padding: CryptoTS.pad.PKCS7,
    });
   console.log(encrypted.toString());
  }
  decryptUsingAES256() {
    let _key = CryptoTS.enc.Utf8.parse('b14ca5898a4e4133bbce2ea2315a1916');
    let _iv = CryptoTS.enc.Utf8.parse('1234567890123456');
    var ob = {
      iv: _iv,
      mode: CryptoTS.mode.CBC,
      padding: CryptoTS.pad.PKCS7,
    }
    var data = "h912KwxqAdgxj1xcVEtMwjvaQNZLjrISLBPd52WS0EJMXrDbLkYBTBRvxGHMo4JkQV63aI4JlH328w82ie9MCLwLZFhH5CFnIrVHZWeqyHRIIsO9Kwi9/QskIokpcOCLC97OOn+GUl9Xs0v657tVN88mRKDlGjQ+38X2zV9ovE90ZPBeoGg3LosGD8t0KUTQXhLnM5CeB7D+YuZRgI/q4cDWrnpUKsxO/gsLV4dzHU0="
    var decrypted = CryptoTS.AES.decrypt(data, _key,ob).toString(CryptoTS.enc.Utf8);
    console.log(JSON.parse(decrypted))
  }
}
