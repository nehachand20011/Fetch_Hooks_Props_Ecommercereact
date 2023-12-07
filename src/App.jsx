
import React from "react"

import MyRoutes from "./MyRoutes"
import { createStore } from "redux"
import { Provider} from "react-redux"
import cartReducer from "./redux/cartReducer"

const App = () => {
  const store=createStore(cartReducer)
  return (
    <>
    <Provider store={store}>
<MyRoutes/>
</Provider>
    </>
  )
}

export default App