import { applyMiddleware, createStore } from "redux"


import reducer from "./reducers"

const middleware = applyMiddleware()

export default createStore(reducer, middleware)