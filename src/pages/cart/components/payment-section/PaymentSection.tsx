import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethod } from '../../../../entities/payment-method'
import { useCart } from '../../../../hooks/useCart'
import {
  PaymentSubtitle,
  PaymentContainer,
  PaymentTitle,
  PaymentTitleContainer,
  PaymentForm,
  PaymentFormOptionButton,
} from './PaymentSection.styles'

export function PaymentSection() {
  const { paymentMethod, setPaymentMethod } = useCart()

  const paymentOptions = [
    {
      icon: <CreditCard size={24} />,
      title: 'Cartão de crédito',
      value: PaymentMethod.CREDIT_CARD,
      selected: paymentMethod === PaymentMethod.CREDIT_CARD,
    },
    {
      icon: <Bank size={24} />,
      title: 'Cartão de débito',
      value: PaymentMethod.DEBIT_CARD,
      selected: paymentMethod === PaymentMethod.DEBIT_CARD,
    },
    {
      icon: <Money size={24} />,
      title: 'Dinheiro',
      value: PaymentMethod.MONEY,
      selected: paymentMethod === PaymentMethod.MONEY,
    },
  ]

  const handlePaymentOptionSelected = (method: PaymentMethod) => {
    setPaymentMethod(method)
  }

  return (
    <PaymentContainer>
      <PaymentTitleContainer>
        <CurrencyDollar size={24} />
        <div>
          <PaymentTitle>Pagamento</PaymentTitle>
          <PaymentSubtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </PaymentSubtitle>
        </div>
      </PaymentTitleContainer>
      <PaymentForm>
        {paymentOptions.map((option) => (
          <PaymentFormOptionButton
            key={option.title}
            onClick={(event) => {
              event.preventDefault()
              handlePaymentOptionSelected(option.value)
            }}
            selected={option.selected}
          >
            {option.icon}
            <span>{option.title}</span>
          </PaymentFormOptionButton>
        ))}
      </PaymentForm>
    </PaymentContainer>
  )
}
