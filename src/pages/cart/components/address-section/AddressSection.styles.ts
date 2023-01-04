import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.baseCard};
  border-radius: 6px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1.7rem;
  border-radius: 6px 44px;
`

export const AddressTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 0.5rem;
  }
`

export const AddressTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.baseSubtitle};
`

export const AddressSubtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.baseText};
`

export const AddressInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
`

export const AddressFormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;

  span {
    font-size: 0.75rem;
    font-weight: 400;
    font-style: italic;
    color: ${({ theme }) => theme.colors.baseLabel};
  }
`

export const AddressInput = styled.input`
  background-color: ${({ theme }) => theme.colors.baseInput};
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.colors.baseButton};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.baseText};

  &::placeholder {
    color: ${({ theme }) => theme.colors.baseLabel};
  }

  &:focus {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.colors.yellowDark};
  }
`

export const AddressInputThird = styled(AddressInput)`
  width: 30%;
`

export const AddressInputHalf = styled(AddressInput)`
  width: 50%;
`

export const AddressInputTwoThirds = styled(AddressInput)`
  width: 60%;
`

export const AddressInputFull = styled(AddressInput)`
  width: 100%;
`

export const AddressInputState = styled(AddressInput)`
  width: 20%;
`
