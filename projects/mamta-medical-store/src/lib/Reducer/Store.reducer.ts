import { Action, State, createReducer, on } from '@ngrx/store';
import { AppState } from '../AppState/AppState';
import {
  Addtocart_action,
  Cartcount_action,
  Icon_action,
  Image_action,
  Ip_action,
  LOGOUT,
  Mediaquery_action,
  Medicinetype_action,
  Navigation_action,
  Productid_action,
  Search_action,
  Server_action,
  Transfer_action,
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
//cart count
export const _Cartcount_reducer = createReducer(
  App,
  on(Cartcount_action, (state: any, action: any) => {
    if (action.value == 'LOGOUT') {
        state = {};
      } else {
        return {
            ...state,
            Cartcount: action.value,
          };
      }
   
  })
);
export function Cartcount_reducer(state: any, action: any) {
  return _Cartcount_reducer(state, action);
}
//navigation 
export const _Navigation_reducer = createReducer(App,on(Navigation_action,(state:any, action:any) =>{
  if (action.value == 'LOGOUT') {
    state = {};
  } else {
    return {
        ...state,
        Navigate: action.value,
      };
  }
}))
export function Navigation_reducer(state:any,action:any){
  return _Navigation_reducer(state,action);
} 

//navigation 
export const _Transfer_reducer = createReducer(App,on(Transfer_action,(state:any, action:any) =>{
  if (action.value == 'LOGOUT') {
    state = {};
  } else {
    return {
        ...state,
        Transfer: action.value,
      };
  }
}))
export function Transfer_reducer(state:any,action:any){
  return _Transfer_reducer(state,action);
} 
//IP
export const _Ip_reducer = createReducer(App,on(Ip_action,(state:any, action:any) =>{
  if (action.value == 'LOGOUT') {
    state = {};
  } else {
    return {
        ...state,
        Ip: action.value,
      };
  }
}))
export function Ip_reducer(state:any,action:any){
  return _Ip_reducer(state,action);
} 
//Image

export const _Image_reducer = createReducer(App,on(Image_action,(state:any, action:any) =>{
  if (action.value == 'LOGOUT') {
    state = {};
  } else {
    return {
        ...state,
        Image: action.value,
      };
  }
}))
export function Image_reducer(state:any,action:any){
  return _Image_reducer(state,action);
} 
//Icons
export const _Icon_reducer = createReducer(App,on(Icon_action,(state:any, action:any) =>{
  if (action.value == 'LOGOUT') {
    state = {};
  } else {
    return {
        ...state,
        Icon: action.value,
      };
  }
}))
export function Icon_reducer(state:any,action:any){
  return _Icon_reducer(state,action);
} 
//server

export const _Server_reducer = createReducer(App,on(Server_action,(state:any, action:any) =>{
  if (action.value == 'LOGOUT') {
    state = {};
  } else {
    return {
        ...state,
        Server: action.value,
      };
  }
}))
export function Server_reducer(state:any,action:any){
  return _Server_reducer(state,action);
} 
//Media Query
export const _Mediaquery_reducer = createReducer(App,on(Mediaquery_action,(state:any, action:any) =>{
  if (action.value == 'LOGOUT') {
    state = {};
  } else {
    return {
        ...state,
        Mediaquery: action.value,
      };
  }
}))
export function Mediaquery_reducer(state:any,action:any){
  return _Mediaquery_reducer(state,action);
} 