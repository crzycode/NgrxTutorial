import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGOUT, metaReducers } from 'mamta-medical-store';



import {Addtocart_action, Medicinetype_action, Productid_action, Search_action, logoutAction } from 'projects/mamta-medical-store/src/lib/Action/Store.action';
import {search_selector } from 'projects/mamta-medical-store/src/lib/Selector/Store.selector';
import { AppState, Search_state } from 'projects/mamta-medical-store/src/public-api';

// import { AppState, SearchState, isSearch_action, isSearch_selector, logoutAction, search_action, search_selector } from 'projects/mamta-medical-store/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MamtaMedicalStore';
  constructor(private store:Store<AppState>) {
   this.store.dispatch(Addtocart_action({value:{data:"hellos"}}))
   this.store.dispatch(Search_action({value:"sdfsdf"}))
   this.store.dispatch(Medicinetype_action({value:"SFSF"}))
   this.store.dispatch(Productid_action({value:{data:"hellos"}}))
  //  this.store.dispatch(logoutAction())
  //  this.store.dispatch(isSearch_action({value:true}))
  //  this.store.dispatch(Products_action({value:[{mangal:"sfsf"},{mangal:"sfsf"},{mangal:"sfsf"}]}))
  //  this.store.select(isSearch_selector).subscribe(res => console.log(res))
   this.store.select('Medicinetype').subscribe(res => console.log(res))
   this.store.select('Search').subscribe(res => console.log(res))
  //  this.store.select('Products').subscribe(res => console.log(res))
  
  //  this.store.dispatch(logoutAction())
    
  }
}
