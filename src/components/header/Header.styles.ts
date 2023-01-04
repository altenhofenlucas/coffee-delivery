import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const HeaderCart = styled.div`
  cursor: pointer;
  width: 2.375rem;
  height: 2.375rem;
  color: ${({ theme }) => theme.colors.yellowDark};
  background-color: ${({ theme }) => theme.colors.yellowLight};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  span {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellowDark};
    border-radius: 50%;
    padding: 0.125rem 0.375rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    position: absolute;
  }
`
