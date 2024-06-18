import { createAction, props } from "@ngrx/store";
export const Search_action = createAction('Search',props<{value:any}>())
export const Medicinetype_action = createAction('Medicinetype',props<{value:any}>())
export const Productid_action = createAction("Productid",props<{value:any}>())
export const Addtocart_action = createAction("Addtocart",props<{value:any}>())
export const Cartcount_action = createAction("CartCount",props<{value:any}>())
export const Navigation_action = createAction("Navigation",props<{value:any}>())
export const Transfer_action = createAction("Transfer",props<{value:any}>())
export const Ip_action = createAction("Ip",props<{value:any}>())

export const Image_action = createAction("Image",props<{value:any}>())
export const Icon_action = createAction("Icon",props<{value:any}>())
export const Server_action = createAction("Server",props<{value:any}>())
export const Mediaquery_action = createAction("Mediaquery",props<{value:any}>())

export const LOGOUT = '[App] Logout';
export const logoutAction = createAction('[App] Logout');