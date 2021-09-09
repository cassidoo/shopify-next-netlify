import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);

  return (
    <AppContext.Provider value={{ cartId, setCartId }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
