import '../styles/globals.css'
import 'react-multi-carousel/lib/styles.css'
import { StoreProviderWrapper } from '../utils/StoreProvider'
import Header from '../components/Header/Header'
function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <StoreProviderWrapper>
        <Header />
        <Component {...pageProps} />
      </StoreProviderWrapper>
    </>
  )
}

export default MyApp
