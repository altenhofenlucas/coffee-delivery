import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'

import { Background, LayoutContainer } from './Default.styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Background />
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
