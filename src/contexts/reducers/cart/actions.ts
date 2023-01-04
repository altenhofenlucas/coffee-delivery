import { Address } from '../../../entities/address'
import { PaymentMethod } from '../../../entities/payment-method'
import { Product } from '../../../entities/product'

export enum CartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  SET_ADDRESS = 'SET_ADDRESS',
}

export interface CartPayload {
  address?: Address
  paymentMethod?: PaymentMethod
  product?: Product
}

export function addProductAction(payload: CartPayload) {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload,
  }
}

export function removeProductAction(payload: CartPayload) {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
  }
}

export function clearCartAction() {
  return {
    type: CartActionTypes.CLEAR_CART,
    payload: null,
  }
}

export function setPaymentMethodAction(payload: CartPayload) {
  return {
    type: CartActionTypes.SET_PAYMENT_METHOD,
    payload,
  }
}

export function setAddressAction(payload: CartPayload) {
  return {
    type: CartActionTypes.SET_ADDRESS,
    payload,
  }
}
