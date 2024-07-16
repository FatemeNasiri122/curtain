import { RouterProvider } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import CreateRouter from './routes'
import React from 'react'

function App() {

  return (
    <>
      <Provider store={store}>
        <React.Suspense fallback={<p>loading...</p>}>
          <RouterProvider router={CreateRouter} />
        </React.Suspense>
      </Provider>
    </>
  )
}

export default App
