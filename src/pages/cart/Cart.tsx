import {
  CartContainer,
  CartContainerLeft,
  CartContainerRigth,
  CartContainerTitle,
} from './Cart.styles'
import { AddressSection } from './components/address-section/AddressSection'
import { PaymentSection } from './components/payment-section/PaymentSection'
import { ItemsSection } from './components/items-section/ItemsSection'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { LocationContext } from '../../contexts/LocationContext'

export function Cart() {
  const navigate = useNavigate()
  const { products, address, paymentMethod, addAddress, clearCart } = useCart()
  const { addLocation } = useContext(LocationContext)

  const addressFormSchema = zod.object({
    zipCode: zod
      .string()
      .min(1, { message: 'CEP é obrigatório' })
      .regex(/[0-9]{5}-[0-9]{3}/, { message: 'CEP inválido' }),
    street: zod.string().min(1),
    number: zod.string().min(1),
    complement: zod.string(),
    neighborhood: zod.string().min(1),
    city: zod.string().min(1),
    state: zod.string().min(1),
  })

  type AddressFormFields = zod.infer<typeof addressFormSchema>

  const addressCartForm = useForm<AddressFormFields>({
    defaultValues: {
      zipCode: address?.zipCode || '',
      street: address?.street || '',
      number: address?.number || '',
      complement: address?.complement || '',
      neighborhood: address?.neighborhood || '',
      city: address?.city || '',
      state: address?.state || '',
    },
    resolver: zodResolver(addressFormSchema),
  })

  const [city, state] = useWatch({
    control: addressCartForm.control,
    name: ['city', 'state'],
  })

  useEffect(() => {
    if (city && state) {
      addLocation({ city, state })
    }
  }, [city, state, addLocation])

  function onSubmit(addressData: AddressFormFields) {
    if (!products || !products.length) return

    if (!addressData) return

    if (!paymentMethod) return

    addAddress(addressData)
    navigate('/checkout-success', {
      state: {
        address: addressData,
        paymentMethod,
        products,
      },
    })

    clearCart()
  }
  return (
    <FormProvider {...addressCartForm}>
      <CartContainer onSubmit={addressCartForm.handleSubmit(onSubmit)}>
        <CartContainerLeft>
          <CartContainerTitle>Complete seu pedido</CartContainerTitle>
          <AddressSection />
          <PaymentSection />
        </CartContainerLeft>
        <CartContainerRigth>
          <CartContainerTitle>Cafés selecionados</CartContainerTitle>
          <ItemsSection />
        </CartContainerRigth>
      </CartContainer>
    </FormProvider>
  )
}
