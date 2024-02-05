import { Action, ActionReducer, MetaReducer } from "@ngrx/store";
import { LOGOUT } from "../Action/Store.action";
  export function clearStateMetaReducer<State extends {}>(reducer: 
    ActionReducer<State>): ActionReducer<State> {
    return function clearStateFn(state, action) {
        if (action.type === LOGOUT) {
            state = {} as State; // ==> Emptying state here
    }
    return reducer(state, action);
   };
}
export const metaReducers: MetaReducer<any>[] = [clearStateMetaReducer];