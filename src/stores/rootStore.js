
import mobx from 'mobx';

import { observable } from 'mobx';

/*
    * Use a single rootStore as the Parent Store this would make 
    * accessing data in other stores as simple as possible
*/
class RootStore {
    @observable testVar = "This string is loaded from the store at src/stores/rootStore.js";

    get testVar() {
        return this.testVar;
    }
}
store = new RootStore();
export default store;