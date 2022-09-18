import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Layout from '@/components/layout'
import Loader from '@/components/Loader'
import store, { presistor } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PersistGate loading={<Loader />} persistor={presistor}>
      {() => (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      )}
    </PersistGate>
  )
}

export default MyApp
