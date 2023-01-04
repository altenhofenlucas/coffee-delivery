import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors.baseCard};

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.baseText};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.baseLabel};
  }
`

export const CoffeeCardTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.yellowLight};
  color: ${({ theme }) => theme.colors.yellowDark};
  font-family: 'Roboto', sans-serif;
  font-size: 0.675rem;
  font-weight: 600;
`

export const CoffeeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  width: 100%;
  height: 100%;
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.875rem;
  margin-bottom: 20px;
  padding: 0 0.875rem;

  & > span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.baseText};

    ::before {
      content: 'R$';
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.baseText};
      margin-right: 0.125rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.purpleDark};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
  }
`
