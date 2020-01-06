import {AddressActions, AddressActionTypes} from './addressActions';
import { VmAddress } from '../../vm/vmAddress';

export function addAddress(vMAddress: VmAddress): AddressActions {
    return {
        type: AddressActionTypes.Add,
        data: vMAddress
    }
}

export function deleteAddress(oid: number): AddressActions {
    return {
        type: AddressActionTypes.Delete,
        meta: {
          oid
        }
    }
}

export function updateAddress(vMAddress: VmAddress) : AddressActions {
    return {
        type: AddressActionTypes.Upate,
        data: vMAddress
    }
}

