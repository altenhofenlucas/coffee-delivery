import { Route, Routes } from 'react-router-dom'
import { Cart } from './pages/cart/Cart'
import { Home } from './pages/home/Home'
import { DefaultLayout } from './layouts/Default'
import { CheckoutSuccess } from './pages/checkout-success/CheckoutSuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout-success" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  )
}
