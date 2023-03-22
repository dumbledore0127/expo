import React, { createContext } from 'react';
import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type AppStylesContextType = {
  styles: typeof AppStyles;
};

export const AppStylesContext = createContext<AppStylesContextType>({
  styles: AppStyles,
});

type AppStylesProviderProps = { children: React.ReactNode };

export const AppStylesProvider: React.FC<AppStylesProviderProps> = ({
  children,
}) => (
  <AppStylesContext.Provider value={{ styles: AppStyles }}>
    {children}
  </AppStylesContext.Provider>
);
