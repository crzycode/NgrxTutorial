import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from 'projects/mamta-medical-store/src/lib/AppReducer/AppReducer';
import { metaReducers } from 'projects/mamta-medical-store/src/lib/Logout/Store.State.Logout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      StoreModule.forRoot(AppReducer,{metaReducers}),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
