import styled from 'styled-components'

export const ItemCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  min-height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.baseButton};
  color: ${({ theme }) => theme.colors.baseText};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;

  svg {
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.purpleDark};
  }
`
