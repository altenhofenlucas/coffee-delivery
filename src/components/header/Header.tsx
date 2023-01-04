import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { HeaderCart, HeaderContainer } from './Header.styles'
import { CurrentLocation } from '../current-location/CurrentLocation'

import logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { products } = useCart()

  const cartQuantity = products?.length || 0
  let cartQuantityText = cartQuantity > 0 ? cartQuantity.toString() : ''
  cartQuantityText = cartQuantity > 9 ? '9+' : cartQuantityText

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <NavLink to="/cart" title="Current Location">
          <CurrentLocation />
        </NavLink>
        <NavLink to="/cart" title="Cart">
          <HeaderCart>
            {cartQuantityText && <span>{cartQuantityText}</span>}
            <ShoppingCart weight="fill" size={24} />
          </HeaderCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
