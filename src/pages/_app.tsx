import type { AppProps } from 'next/app'
import { NextPageWithLayout } from './page'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import RootLayout from '@/components/layout/layout'

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </>
  )
}

export default MyApp
