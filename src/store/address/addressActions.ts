import { VmAddress } from "../../vm/vmAddress";

export enum AddressActionTypes {
   Add,
   Delete,
   Upate
}

interface AddAddressAction {
    type: AddressActionTypes.Add,
    data: VmAddress
}

interface DeleteAddressAction {
    type: AddressActionTypes.Delete
    meta: {
        oid: number;
    }
}

interface UpdateAdddressAction {
    type: AddressActionTypes.Upate,
    data: VmAddress
}

export type AddressActions = AddAddressAction | DeleteAddressAction | UpdateAdddressAction