import { VmUser } from "../../vm/vmUser";

export enum UserActionTypes {
   Add,
   Delete,
   Upate
}

interface AddUserAction {
    type: UserActionTypes.Add,
    data: VmUser
}

interface DeleteUserAction {
    type: UserActionTypes.Delete,
    meta: {
        oid: number        
    }
}

interface UpdateUserAction {
    type: UserActionTypes.Upate,
    data: VmUser
}

export type UserActions = AddUserAction | DeleteUserAction | UpdateUserAction