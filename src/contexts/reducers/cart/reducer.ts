import produce from 'immer'
import { Address } from '../../../entities/address'
import { PaymentMethod } from '../../../entities/payment-method'
import { Product } from '../../../entities/product'
import { CartActionTypes, CartPayload } from './actions'

interface CartState {
  address: Address | null
  paymentMethod: PaymentMethod | null
  products: Product[] | null
}

export function cartReducer(
  state: CartState,
  action: { type: CartActionTypes; payload: CartPayload | null },
) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        if (!draft.products) return
        if (!action.payload) return

        const productAdded = action.payload.product
        if (!productAdded) return

        draft.products?.push(productAdded)
      })

    case CartActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        if (!draft.products) return
        if (!action.payload) return

        const productRemoved = action.payload.product
        if (!productRemoved) return

        const productIndex = draft.products.findIndex(
          (product) => product.id === productRemoved.id,
        )
        if (productIndex < 0) return

        draft.products.splice(productIndex, 1)
      })

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        products: [],
      }

    case CartActionTypes.SET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload?.paymentMethod || null,
      }

    case CartActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload?.address || null,
      }

    default:
      return state
  }
}
