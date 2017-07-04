import { createStore } from "redux";
import reducer from "./Reducer";


const initialState = {};

// createStore 有三个参数   http://www.redux.org.cn/docs/api/createStore.html  
//createStore() 的第二个参数是可选的, 用于设置 state 初始状态。
//这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致,
//那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。

const store = createStore(reducer,initialState);

export default store;
