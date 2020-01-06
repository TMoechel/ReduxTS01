import { VmUser, UserState } from "../../vm/vmUser";
import { UserActions, UserActionTypes } from "./userActions";

const initialState : UserState = {
    userList: []
}

export function userReducer(state = initialState, action: UserActions) : UserState {
    debugger;
    switch (action.type) {
        case UserActionTypes.Add:
         return {
            userList: [...state.userList, action.data]
         }
         case UserActionTypes.Delete:
             return {
                 userList: state.userList.filter((user) => user.oid != action.meta.oid)
             }
         case UserActionTypes.Upate:
            // to be implemented   
            return state;
                    
         default: return state;
    }
}

