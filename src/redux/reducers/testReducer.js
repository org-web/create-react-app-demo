import createReducer from "./createReducer";
import initState from "../store/initState";
import { ACTION_HANDLERS } from "../actions/testAction";

export default createReducer(initState.testData, ACTION_HANDLERS);
