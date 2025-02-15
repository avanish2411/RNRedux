import React from 'react'
import { Provider } from 'react-redux'
import { mystore, persistedStore } from './redux/store/mystore'
import AppNavigator from './navigation/AppNavigator'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={mystore}>
      <PersistGate persistor={persistedStore}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App