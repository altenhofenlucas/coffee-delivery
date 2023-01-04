import { useLocation } from 'react-router-dom'
import { Address } from '../../entities/address'
import { PaymentMethod } from '../../entities/payment-method'
import { Product } from '../../entities/product'
import successImage from '../../assets/success-image.svg'
import {
  CheckoutImageContainer,
  CheckoutResumeContainer,
  CheckoutSuccessContainer,
  CheckoutSuccessContentContainer,
  CheckoutSuccessHeaderContainer,
  CheckoutSuccessHeaderSubtitle,
  CheckoutSuccessHeaderTitle,
  ResumeItem,
  ResumeItemIconContainer,
} from './CheckoutSuccess.styles'
import { DefaultTheme } from '../../styles/theme/Default'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

interface CheckoutSuccessLocationState {
  address: Address
  paymentMethod: PaymentMethod
  products: Product[]
}

// TODO - finish this page
export function CheckoutSuccess() {
  const { address, paymentMethod } = useLocation().state as CheckoutSuccessLocationState
  const { colors } = DefaultTheme

  const paymentMethodLabel = {
    [PaymentMethod.MONEY]: 'Dinheiro',
    [PaymentMethod.CREDIT_CARD]: 'Cartão de crédito',
    [PaymentMethod.DEBIT_CARD]: 'Cartão de débito',
  }[paymentMethod]

  return (
    <CheckoutSuccessContainer>
      <CheckoutSuccessHeaderContainer>
        <CheckoutSuccessHeaderTitle>Uhu! Pedido confirmado</CheckoutSuccessHeaderTitle>
        <CheckoutSuccessHeaderSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </CheckoutSuccessHeaderSubtitle>
      </CheckoutSuccessHeaderContainer>

      <CheckoutSuccessContentContainer>
        <CheckoutResumeContainer>
          <ResumeItem>
            <ResumeItemIconContainer iconBackgroundColor={colors.purple}>
              <MapPin weight="fill" size={16} />
            </ResumeItemIconContainer>
            <p>
              Entrega em{' '}
              <strong>
                {' '}
                {address.street}, {address.number}{' '}
              </strong>
              <p>{`${address.neighborhood} - ${address.city}, ${address.state}`}</p>
            </p>
          </ResumeItem>
          <ResumeItem>
            <ResumeItemIconContainer iconBackgroundColor={colors.yellow}>
              <Timer weight="fill" size={16} />
            </ResumeItemIconContainer>
            <p>
              Previsão de entrega{' '}
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </p>
          </ResumeItem>
          <ResumeItem>
            <ResumeItemIconContainer iconBackgroundColor={colors.yellowDark}>
              <CurrencyDollar weight="fill" size={16} />
            </ResumeItemIconContainer>
            <p>
              Forma de pagamento:
              <p>
                <strong>{paymentMethodLabel}</strong>
              </p>
            </p>
          </ResumeItem>
        </CheckoutResumeContainer>
        <CheckoutImageContainer>
          <img src={successImage} />
        </CheckoutImageContainer>
      </CheckoutSuccessContentContainer>
    </CheckoutSuccessContainer>
  )
}
