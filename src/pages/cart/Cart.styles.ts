import styled from 'styled-components'

export const CartContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
`

export const CartContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 60%;
  gap: 1rem;
`

export const CartContainerRigth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 40%;
  padding: 0 1rem;
  gap: 1rem;
`

export const CartContainerTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`
