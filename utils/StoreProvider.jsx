import React, { createContext, useEffect, useState } from 'react'

const StoreContext = createContext()
function StoreProviderWrapper(props) {
  const [countDown, setCountDonw] = useState(0)
  const store = { countDown }
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  )
}
export { StoreContext, StoreProviderWrapper }
