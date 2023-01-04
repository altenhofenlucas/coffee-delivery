import styled from 'styled-components'

export const EmptyItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
`

export const EmptyItemListImage = styled.img`
  width: 100%;
  max-width: 100px;
  margin-bottom: 2rem;
`

export const EmptyItemListText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.baseSubtitle};
  text-align: center;

  a:hover {
    color: ${({ theme }) => theme.colors.baseText};
    text-decoration: underline;
  }
`
