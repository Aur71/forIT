import React from 'react'
import { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loader, setLoader] = useState(false)
  const [filterIndex, setFilterIndex] = useState(1)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [loader])

  return (
    <AppContext.Provider
      value={{
        loader,
        setLoader,
        filterIndex,
        setFilterIndex,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
