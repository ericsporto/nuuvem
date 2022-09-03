import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AppProps } from 'next/app'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    <ToastContainer autoClose={2000}/>
    </QueryClientProvider>
  )
}

export default MyApp
