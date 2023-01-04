import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`

export const HomeTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.baseSubtitle};
`
