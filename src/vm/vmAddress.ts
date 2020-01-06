export interface VmAddress {
    oid: number;
    idUser : number;  
    zip : string;
    city : string;
    street: string;
}

export interface AddressState {
    addressList: VmAddress[]
}