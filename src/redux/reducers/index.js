import { combineReducers } from "redux";

import store from "../store";
import testReducer from "./testReducer";

const syncReducers = {
  testData: testReducer
};

const asyncReducers = {};

/**
 * rootReducer
 */
export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  });
}

/**
 * 按需加载时，立即注入对应的Reducer
 * @param {string} key
 * @param {Function} reducer
 */
export function injectReducer(key, reducer) {
  asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer()); // 替换当前的rootReducer
}
