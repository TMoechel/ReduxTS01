import {UserActions, UserActionTypes} from './userActions';
import { VmUser } from '../../vm/vmUser';

export function addUser(vMUser: VmUser): UserActions {
    return {
        type: UserActionTypes.Add,
        data: vMUser
    }
}

export function deleteUser(oid: number): UserActions {
    return {
        type: UserActionTypes.Delete,
        meta: {
            oid
        }
    }
}

export function updateUser(vMUser: VmUser) : UserActions {
    return {
        type: UserActionTypes.Upate,
        data: vMUser
    }
}

