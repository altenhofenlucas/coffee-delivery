import { Minus, Plus } from 'phosphor-react'
import { ItemCounterContainer } from './ItemCounter.styles'

interface ItemCounterProps {
  quantity: number
  onAddItem: () => void
  onRemoveItem: () => void
}

export function ItemCounter({ quantity, onAddItem, onRemoveItem }: ItemCounterProps) {
  return (
    <ItemCounterContainer>
      <Minus weight="bold" onClick={() => onRemoveItem()} />
      <span>{quantity}</span>
      <Plus weight="bold" onClick={() => onAddItem()} />
    </ItemCounterContainer>
  )
}
