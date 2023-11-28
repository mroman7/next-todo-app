import AppContextProvider from '@/context/app-context'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <Toaster />
    </AppContextProvider>
  )
}
