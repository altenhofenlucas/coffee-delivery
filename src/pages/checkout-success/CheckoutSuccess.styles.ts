import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const CheckoutSuccessHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
  padding: 2rem 0;
`

export const CheckoutSuccessHeaderTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const CheckoutSuccessHeaderSubtitle = styled.h2`
  font-size: 1.275rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.baseSubtitle};
`

export const CheckoutSuccessContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const CheckoutResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 6px 36px;
  height: 100%;
  width: 48%;
  padding: 2.5rem;
  gap: 0.875rem;
`

export const CheckoutImageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const ResumeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  gap: 0.875rem;
  padding: 0.6rem 0;
`

interface ResumeItemIconContainerProps {
  iconBackgroundColor: string | undefined
}

export const ResumeItemIconContainer = styled.div<ResumeItemIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ iconBackgroundColor }) => iconBackgroundColor || 'transparent'};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
`
