import { createAction, props } from "@ngrx/store";
export const Search_action = createAction('Search',props<{value:any}>())
export const Medicinetype_action = createAction('Medicinetype',props<{value:any}>())
export const Productid_action = createAction("Productid",props<{value:any}>())
export const Addtocart_action = createAction("Addtocart",props<{value:any}>())

export const LOGOUT = '[App] Logout';
export const logoutAction = createAction('[App] Logout');