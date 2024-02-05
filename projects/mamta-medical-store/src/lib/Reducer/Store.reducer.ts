import { Action, State, createReducer, on } from '@ngrx/store';
import { AppState } from '../AppState/AppState';
import {
  Addtocart_action,
  LOGOUT,
  Medicinetype_action,
  Productid_action,
  Search_action,
} from '../Action/Store.action';
import {
  Addtocart_state,
  MedicineType_state,
  Productid_state,
  Search_state,
} from '../State/Store.state';
export const App: AppState[] = [];
//search
export const _search_reducer = createReducer(
  App,
  on(Search_action, (state: any, action: any) => {
    if (action.value == 'LOGOUT') {
      state = {};
    } else {
      return {
        ...state,
        Search: action.value,
      };
    }
  })
);
export function search_reducer(state: any, action: any) {
  return _search_reducer(state, action);
}
//Medicinetype
export const _medicinetype_reducer = createReducer(
  App,
  on(Medicinetype_action, (state: any, action: any) => {
    if (action.value == 'LOGOUT') {
        state = {};
      } else {
        return {
            ...state,
            Medicinetype: action.value,
          };
      }
  
  })
);
export function medicinetype_reducer(state: any, action: any) {
  return _medicinetype_reducer(state, action);
}
//product id reducer

export const _productid_reducer = createReducer(
  App,
  on(Productid_action, (state: any, action: any) => {
    if (action.value == 'LOGOUT') {
        state = {};
      } else {
        return {
            ...state,
            Productid: action.value,
          };
      }
  
  })
);
export function Productid_reducer(state: any, action: any) {
  return _productid_reducer(state, action);
}
//add to cart
export const _Addtocart_reducer = createReducer(
  App,
  on(Addtocart_action, (state: any, action: any) => {
    if (action.value == 'LOGOUT') {
        state = {};
      } else {
        return {
            ...state,
            Addtocart: action.value,
          };
      }
   
  })
);
export function Addtocart_reducer(state: any, action: any) {
  return _Addtocart_reducer(state, action);
}
