import {Addtocart_state, MedicineType_state, Productid_state, Search_state } from "../State/Store.state"
export interface AppState{
    Search:Search_state,
    Medicinetype:MedicineType_state,
    Productid:Productid_state,
    Addtocart:Addtocart_state

}