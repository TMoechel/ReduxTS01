import {HttpClient} from "../api/httpClient";
import {VmUser} from "../vm/vmUser";
import {AppStore} from "../store/appStore";
import { VmAddress } from "../vm/vmAddress";
import {addUser } from "../store/user/userActionCreators"
import { addAddress } from "../store/address/addressActionCreators";

interface MyWindow extends Window {
    getControls(): any;
}
declare var window: MyWindow;

export class User {
    firstName: string = "";
    lastName: string = "";
    oid: number = 0;

    txtFirstName: HTMLInputElement;
    txtLastName: HTMLInputElement;
    lbxAddressList: HTMLSelectElement;
    appStore: AppStore = new AppStore();

    constructor(txtFirstName : HTMLElement, txtLastName: HTMLElement, lbxAddressList: HTMLElement) {
        this.txtFirstName = txtFirstName as HTMLInputElement;
        this.txtLastName = txtLastName as HTMLInputElement;
        this.lbxAddressList = lbxAddressList as HTMLSelectElement;

    }

    
    initialize(oid: number) {
        this.oid = oid;
        let store = this.appStore.getStore(); 
        store.subscribe(() => console.log(store.getState()))
        this.loadData(oid);
        
    }

    loadData(oid: number) {
        var apiClient = new HttpClient();
        apiClient.getData().done( (data) => this.showData(data))
    }

    showData(vmUserList: VmUser[]) {
        let testAddress : VmAddress = {zip: "78888", city: "Main", oid:77, street:"Wall Street", idUser:2};
        vmUserList.forEach((vmUser => {
            debugger;
            let option = document.createElement('option');
            option.innerHTML = vmUser.firstName + ' ' + vmUser.lastName;
            this.lbxAddressList.options.add(option);
            this.appStore.getStore().dispatch(addUser(vmUser));
            this.appStore.getStore().dispatch(addAddress(testAddress));
            
        }));
        
        
    }
}
