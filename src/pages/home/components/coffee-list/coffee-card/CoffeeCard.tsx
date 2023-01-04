import { ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../../../../entities/product'
import { ItemCounter } from '../../../../../components/item-counter/ItemCounter'
import { useCart } from '../../../../../hooks/useCart'
import {
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeCardFooter,
  CoffeeCardTag,
} from './CoffeeCard.styles'

interface CoffeeCardProps {
  coffee: Product
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { products, addProductToCart, removeProductFromCart } = useCart()
  const navigate = useNavigate()

  const quantity =
    products && products.filter((product) => product.id === coffee.id).length

  function handleAddCoffee({ navigateToCart = true }: { navigateToCart?: boolean }) {
    addProductToCart(coffee)
    navigateToCart && navigate('/cart')
  }

  function handleRemoveCoffee() {
    removeProductFromCart(coffee)
  }

  function getPriceText() {
    return coffee.price.toFixed(2).replace('.', ',')
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} />
      <CoffeeCardTag>{coffee.tags[0]}</CoffeeCardTag>
      <CoffeeCardContent>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </CoffeeCardContent>
      <CoffeeCardFooter>
        <span>{getPriceText()}</span>
        <ItemCounter
          quantity={quantity ?? 0}
          onAddItem={() => handleAddCoffee({ navigateToCart: false })}
          onRemoveItem={handleRemoveCoffee}
        />
        <button type="button" onClick={() => handleAddCoffee({ navigateToCart: true })}>
          <ShoppingCart weight="fill" size={20} />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
