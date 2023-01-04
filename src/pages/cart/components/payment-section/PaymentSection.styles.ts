import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.baseCard};
  width: 100%;
  padding: 1.7rem;
  border-radius: 6px 44px;
`

export const PaymentTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 0.5rem;
  }
`

export const PaymentTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.baseSubtitle};
`

export const PaymentSubtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.baseText};
`

export const PaymentForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 0.875rem;
`

interface PaymentFormOptionProps {
  selected: boolean
}

export const PaymentFormOptionButton = styled.button<PaymentFormOptionProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0.875rem;
  border: ${({ theme, selected }) => {
    if (selected) {
      return `1px solid ${theme.colors.purpleDark}`
    }
    return 'none'
  }};
  border-radius: 6px;
  background-color: ${({ theme, selected }) => {
    if (selected) {
      return theme.colors.purpleLight
    }
    return theme.colors.baseButton
  }};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  gap: 0.875rem;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.baseText};
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseHover};
  }

  &:focus {
    outline: none;
  }
`
