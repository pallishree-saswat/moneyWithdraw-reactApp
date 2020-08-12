import {createStore} from "redux";
import Reducer from "./reducers/index"

const Store = createStore(Reducer);


export default Store;