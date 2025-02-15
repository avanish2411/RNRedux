import React from 'react'
import { Provider } from 'react-redux'
import mystore from './redux/store/mystore'
import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
    <Provider store={mystore}>
      <AppNavigator />
    </Provider>
  )
}

export default App