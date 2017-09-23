
import mobx from 'mobx';

import { observable } from 'mobx';

/*
    * Use a single rootStore as the Parent Store this would make 
    * accessing data in other stores as simple as possible
*/
class RootStore {
    @observable testVar = "hey";

    get testVar() {
        return this.testVar;
    }
}

export default RootStore;