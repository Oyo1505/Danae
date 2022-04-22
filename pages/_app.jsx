import '../styles/globals.css'
import 'react-multi-carousel/lib/styles.css'
import { StoreProviderWrapper } from '../utils/StoreProvider'
import Header from '../components/Header/Header'
function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <div className="min-h-screen bg-zinc-900 font-sans text-white">
        <StoreProviderWrapper>
          <Header />
          <div className="p-20 ">
            <Component {...pageProps} />
          </div>
        </StoreProviderWrapper>
      </div>
    </>
  )
}

export default MyApp
