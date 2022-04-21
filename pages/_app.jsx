import '../styles/globals.css'
import { StoreProviderWrapper } from '../utils/StoreProvider'

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <StoreProviderWrapper>
        <Component {...pageProps} />
      </StoreProviderWrapper>
    </>
  )
}

export default MyApp
