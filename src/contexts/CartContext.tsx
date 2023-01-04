import { createContext, ReactNode, useReducer } from 'react'
import { Address } from '../entities/address'
import { PaymentMethod } from '../entities/payment-method'
import { Product } from '../entities/product'
import {
  addProductAction,
  clearCartAction,
  removeProductAction,
  setAddressAction,
  setPaymentMethodAction,
} from './reducers/cart/actions'
import { cartReducer } from './reducers/cart/reducer'

interface CartContextData {
  products: Product[] | null
  address: Address | null
  paymentMethod: PaymentMethod | null
  addProductToCart: (product: Product) => void
  removeProductFromCart: (product: Product) => void
  clearCart: () => void
  setPaymentMethod: (paymentMethod: PaymentMethod) => void
  addAddress: (address: Address) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
      address: null,
      paymentMethod: null,
    },
    () => {
      const localData = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')
      return localData ? JSON.parse(localData) : { products: [] }
    },
  )

  const { products, address, paymentMethod } = cartState

  function addProductToCart(product: Product) {
    dispatch(
      addProductAction({
        product,
      }),
    )
  }

  function removeProductFromCart(product: Product) {
    dispatch(
      removeProductAction({
        product,
      }),
    )
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  function setPaymentMethod(paymentMethod: PaymentMethod) {
    dispatch(
      setPaymentMethodAction({
        paymentMethod,
      }),
    )
  }

  function addAddress(address: Address) {
    dispatch(
      setAddressAction({
        address,
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        products,
        address,
        paymentMethod,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        setPaymentMethod,
        addAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
