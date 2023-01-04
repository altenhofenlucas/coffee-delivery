import { MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { LocationContext } from '../../contexts/LocationContext'
import { CurrentLocationContainer } from './CurrentLocation.styles'

export function CurrentLocation() {
  const { location } = useContext(LocationContext)
  const currentLocationText = location
    ? `${location.city}, ${location.state}`
    : 'Selecione sua localização'
  return (
    <CurrentLocationContainer>
      <MapPin weight="fill" size={24} />
      <span>{currentLocationText}</span>
    </CurrentLocationContainer>
  )
}
