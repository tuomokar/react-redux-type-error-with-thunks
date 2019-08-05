import React from "react"
import "./App.css"
import { Provider } from 'react-redux'

import store from './store'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          Two counters here with identical functionality (and
          using same data) but the first one gets a typescript
          compiler error.
        </div>
        <Counter1 />
        <Counter2 />
      </div>
    </Provider>
  )
}

export default App

