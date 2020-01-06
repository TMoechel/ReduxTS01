import * as serviceWorker from './serviceWorker';
import {User} from './controls/user';

var user = new User(
    $("#txtFirstName")[0],  
    $("#txtLastName")[0],
    $("#lbxAddressList")[0]
    );
user.initialize(1);

serviceWorker.unregister();
