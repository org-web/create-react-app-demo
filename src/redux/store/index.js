import { applyMiddleware, compose, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";

import { createRootReducer } from "../reducers";

// 中间件 增强reducer
// ThunkMiddleware使其拥有处理异步方法的能力
// middlewares是一个中间件数组，可以添加很多中间件
const middlewares = [ThunkMiddleware];

const store = createStore(
  createRootReducer(),
  compose(applyMiddleware(...middlewares))
);
// console.log(store, store.getState());
export default store;
