import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 73rem;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 2rem;
`

export const Background = styled.div`
  background-image: url('src/assets/background-shapes.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: blur(70px);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
