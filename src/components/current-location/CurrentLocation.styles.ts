import styled from 'styled-components'

export const CurrentLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.purple};
  background-color: ${({ theme }) => theme.colors.purpleLight};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  height: 2.375rem;

  &:hover {
    color: ${({ theme }) => theme.colors.purpleDark};
  }
`
