import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  gap: 3rem;
  width: 100%;
  height: 360px;
  border-radius: 6px;
  text-align: center;

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }
`

export const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const BannerLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.baseTitle};
    font-family: 'Baloo 2', cursive;
    text-align: left;
    line-height: 120%;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    text-align: left;
    font-family: 'Roboto', sans-serif;
  }
`

export const BannerLeftItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
