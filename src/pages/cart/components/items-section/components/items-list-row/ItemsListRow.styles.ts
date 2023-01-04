import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  gap: 1.5rem;
`

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`

export const CartItemDivider = styled.div`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.baseButton};
`

export const CartItemImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
`

export const CartItemNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
`

export const CartItemName = styled.span`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.baseSubtitle};
`

export const CartItemNameActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;
  height: 1rem;
`

export const CartItemRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  min-height: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.baseButton};
  color: ${({ theme }) => theme.colors.baseText};
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
  cursor: pointer;
  gap: 4px;
  transition: all 0.2s ease-in-out;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseHover};

    svg {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }
`

export const CartItemPriceContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  width: 100%;
  height: auto;

  span {
    text-align: end;
    font-weight: 700;
    width: 100%;
    height: 100%;
  }
`
