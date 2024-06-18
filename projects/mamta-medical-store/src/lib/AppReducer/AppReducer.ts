import {Addtocart_reducer, Cartcount_reducer, Icon_reducer, Image_reducer, Ip_reducer, Mediaquery_reducer, Navigation_reducer, Productid_reducer, Server_reducer, Transfer_reducer, medicinetype_reducer, search_reducer } from "../Reducer/Store.reducer";
export const  AppReducer = {
    Search:search_reducer,
    Medicinetype:medicinetype_reducer,
    Productid:Productid_reducer,
    Addtocart:Addtocart_reducer,
    Cartcount:Cartcount_reducer,
    Navigation:Navigation_reducer,
    Transfer:Transfer_reducer,
    Ip:Ip_reducer,
    Image:Image_reducer,
    Icon:Icon_reducer,
    Server:Server_reducer,
    Mediaquery:Mediaquery_reducer


}
