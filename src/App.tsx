import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { LocationContextProvider } from './contexts/LocationContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/theme/Default'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <LocationContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </LocationContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
