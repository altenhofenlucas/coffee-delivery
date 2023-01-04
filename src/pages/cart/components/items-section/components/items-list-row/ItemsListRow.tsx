import { Trash } from 'phosphor-react'
import { ItemCounter } from '../../../../../../components/item-counter/ItemCounter'
import { formatPriceNumber } from '../../../../../../helpers/price-format'
import {
  CartItemContainer,
  CartItemContent,
  CartItemDivider,
  CartItemImageContainer,
  CartItemName,
  CartItemNameActionsContainer,
  CartItemNameContainer,
  CartItemPriceContainer,
  CartItemRemoveButton,
} from './ItemsListRow.styles'

interface ItemsListRowProps {
  image: string
  name: string
  price: number
  quantity: number
  onAddItem: () => void
  onRemoveItem: () => void
}

export function ItemsListRow({
  image,
  name,
  price,
  quantity,
  onAddItem,
  onRemoveItem,
}: ItemsListRowProps) {
  return (
    <CartItemContainer>
      <CartItemContent>
        <CartItemImageContainer>
          <img src={image} />
        </CartItemImageContainer>
        <CartItemNameContainer>
          <CartItemName>{name}</CartItemName>
          <CartItemNameActionsContainer>
            <ItemCounter
              quantity={quantity}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
            />
            <CartItemRemoveButton onClick={onRemoveItem}>
              <Trash size={16} />
              Remover
            </CartItemRemoveButton>
          </CartItemNameActionsContainer>
        </CartItemNameContainer>
        <CartItemPriceContainer>
          <span>{formatPriceNumber(price)}</span>
        </CartItemPriceContainer>
      </CartItemContent>
      <CartItemDivider />
    </CartItemContainer>
  )
}
