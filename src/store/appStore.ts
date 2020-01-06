import { createStore, Store, Action } from 'redux'
import { UserActions } from './user/userActions';
import {VmUser} from '../vm/vmUser';
import {VmAddress} from '../vm/vmAddress';
import {userReducer} from '../store/user/userReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

interface rootState {
  userList: VmUser[],
  addressList: VmAddress[]
}

const initialState : rootState = {
  userList: [],
  addressList: []
}

export class AppStore {
    
    private store: Store = createStore(this.rootReducer, composeWithDevTools());

    rootReducer(state = initialState, action: any) {
      debugger;  
      switch (action.type) {
          case 'ADD_USER':
              return Object.assign({}, state, {
                userList: userReducer({userList: state.userList}, action)
              })
          case 'ADD_ADDRESS':
              return Object.assign({}, state, {
                addressList: [
                  ...state.addressList,
                  {
                    address: action.address,
                  }
                ]
              })
          default:
            return state
        }
    }

    public getStore() {
        return this.store;
    }
}