import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppState } from "../AppState/AppState"
import {Addtocart_state, MedicineType_state, Productid_state, Search_state } from "../State/Store.state"
import { state } from "@angular/animations"
const App_Select = createFeatureSelector<AppState>('App')

export const search_selector = createSelector(App_Select,state =>{
    return state.Search
})
export const Medicinetype_selector = createSelector(App_Select,state =>{
    return state.Medicinetype
})
export const Productid_selector = createSelector(App_Select,state =>{
    return state.Productid
})
export const Addtocart_selector = createSelector(App_Select,state =>{
    return state.Addtocart
})
export const Cartcount_selector = createSelector(App_Select,state =>{
    return state.Cartcount
})
export const Navigate_selector = createSelector(App_Select,state =>{
    return state.Navigation
})
export const Transfer_selector = createSelector(App_Select,state =>{
    return state.Transfer
})
export const Ip_selector = createSelector(App_Select,state =>{
    return state.Ip
})


export const Image_selector = createSelector(App_Select,state =>{
    return state.Image
})
export const Icon_selector = createSelector(App_Select,state =>{
    return state.Icon
})
export const Server_selector = createSelector(App_Select,state =>{
    return state.Server
})
export const Mediaquery_selector = createSelector(App_Select,state =>{
    return state.Mediaquery
})


