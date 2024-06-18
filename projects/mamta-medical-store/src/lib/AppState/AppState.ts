import { TransferState } from "@angular/platform-browser"
import {Addtocart_state, CartCount_state, Icon_state, Image_state, Ip_state, Mediaquery_state, MedicineType_state, Navigate_state, Productid_state, Search_state, Server_state } from "../State/Store.state"
export interface AppState{
    Search:Search_state,
    Medicinetype:MedicineType_state,
    Productid:Productid_state,
    Addtocart:Addtocart_state,
    Cartcount:CartCount_state,
    Navigation:Navigate_state,
    Transfer:TransferState,
    Ip:Ip_state
    Image:Image_state,
    Icon:Icon_state,
    Server:Server_state
    Mediaquery:Mediaquery_state

}