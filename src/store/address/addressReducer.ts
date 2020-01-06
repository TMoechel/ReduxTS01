import { AddressState } from "../../vm/vmAddress";
import { AddressActions, AddressActionTypes } from "./addressActions";

const initialState : AddressState = {
    addressList: []
}

export function addressReducer(state = initialState, action: AddressActions) : AddressState {
    switch (action.type) {
        case AddressActionTypes.Add:
         return {
            addressList: [...state.addressList, action.data]
         }
         case AddressActionTypes.Delete:
             return {
                 addressList: state.addressList.filter((user) => user.oid != action.meta.oid)
             }
         case AddressActionTypes.Upate:
            // to be implemented   
            return state;
                    
         default: return state;
    }
}

