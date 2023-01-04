import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useCart } from '../../../../hooks/useCart'
import {
  AddressContainer,
  AddressInputsContainer,
  AddressFormRow,
  AddressInputFull,
  AddressInputHalf,
  AddressInputState,
  AddressInputThird,
  AddressInputTwoThirds,
  AddressSubtitle,
  AddressTitle,
  AddressTitleContainer,
} from './AddressSection.styles'

export function AddressSection() {
  const { address } = useCart()
  const { register } = useFormContext()
  return (
    <AddressContainer>
      <AddressTitleContainer>
        <MapPinLine size={24} />
        <div>
          <AddressTitle>Endereço de Entrega</AddressTitle>
          <AddressSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </AddressSubtitle>
        </div>
      </AddressTitleContainer>
      <AddressInputsContainer>
        <AddressFormRow>
          <AddressInputThird
            type="text"
            placeholder="CEP*"
            value={address?.zipCode}
            {...register('zipCode')}
          />
        </AddressFormRow>
        <AddressFormRow>
          <AddressInputFull
            type="text"
            placeholder="Rua*"
            value={address?.street}
            {...register('street')}
          />
        </AddressFormRow>
        <AddressFormRow>
          <AddressInputThird
            type="text"
            placeholder="Número*"
            value={address?.number}
            {...register('number')}
          />
          <AddressInputTwoThirds
            type="text"
            placeholder="Complemento"
            value={address?.complement}
            {...register('complement')}
          />
          <span>Opcional</span>
        </AddressFormRow>
        <AddressFormRow>
          <AddressInputThird
            type="text"
            placeholder="Bairro*"
            value={address?.neighborhood}
            {...register('neighborhood')}
          />
          <AddressInputHalf
            type="text"
            placeholder="Cidade*"
            value={address?.city}
            {...register('city')}
          />
          <AddressInputState
            list="state-input"
            placeholder="Estado*"
            maxLength={2}
            value={address?.state}
            {...register('state')}
          />
          <datalist id="state-input">
            <option value="AC" />
            <option value="AL" />
            <option value="AP" />
            <option value="AM" />
            <option value="BA" />
            <option value="CE" />
            <option value="DF" />
            <option value="ES" />
            <option value="GO" />
            <option value="MA" />
            <option value="MT" />
            <option value="MS" />
            <option value="MG" />
            <option value="PA" />
            <option value="PB" />
            <option value="PR" />
            <option value="PE" />
            <option value="PI" />
            <option value="RJ" />
            <option value="RN" />
            <option value="RS" />
            <option value="RO" />
            <option value="RR" />
            <option value="SC" />
            <option value="SP" />
            <option value="SE" />
            <option value="TO" />
          </datalist>
        </AddressFormRow>
      </AddressInputsContainer>
    </AddressContainer>
  )
}
