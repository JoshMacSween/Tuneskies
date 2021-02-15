import React, {createContext} from 'react';

export const StylesContext = createContext();

export default function StylesProvider({children}) {
  const largeText = {fontSize: 44, color: 'white'};
  const smallText = {fonstSize: 44};
  const textStyle = {fontFamily: 'AvenirNext-Regular'};
  const container = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <StylesContext.Provider
      value={{
        largeText,
        smallText,
        textStyle,
        container,
      }}>
      {children}
    </StylesContext.Provider>
  );
}
