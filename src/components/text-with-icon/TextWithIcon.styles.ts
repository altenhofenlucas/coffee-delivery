import styled from 'styled-components'

export const TextWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 50%;
  gap: 0.5rem;
  padding: 0.6rem 0;
`

interface TextWithIconIconProps {
  iconBackgroundColor: string | undefined
}

export const TextWithIconIconContainer = styled.div<TextWithIconIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ iconBackgroundColor }) => iconBackgroundColor || 'transparent'};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
`
