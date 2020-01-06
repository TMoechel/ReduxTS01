export interface VmUser {
    oid: number;
    firstName: string;
    lastName: string;
}

export interface UserState {
    userList: VmUser[]
}