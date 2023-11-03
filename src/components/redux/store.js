import {createStore} from "redux";
import scoreReducer from "./reducer/scoreReducer"

const store = createStore(scoreReducer);

export default store;