import { Product } from '../../../../entities/product'
import { formatPriceNumber } from '../../../../helpers/price-format'
import { useCart } from '../../../../hooks/useCart'
import { EmptyItemList } from './components/empty-item-list/EmptyItemList'
import { ItemsListRow } from './components/items-list-row/ItemsListRow'
import {
  CartConfirmButton,
  ItemsSectionContainer,
  ItemsListContainer,
  ItemsTotalContainer,
  ItemsTotalRow,
  ItemsTotalRowTextPrimary,
  ItemsTotalRowTextSecondary,
} from './ItemsSection.styles'

export function ItemsSection() {
  const { products, addProductToCart, removeProductFromCart } = useCart()

  function handleAddCoffee(product: Product) {
    addProductToCart(product)
  }

  function handleRemoveCoffee(product: Product) {
    removeProductFromCart(product)
  }

  const productsListById =
    (products &&
      products.reduce((acc, product) => {
        acc[product.id] = acc[product.id] || []
        acc[product.id].push(product)
        return acc
      }, {} as Record<string, Product[]>)) ||
    {}

  const itemsListFormatted = Object.keys(productsListById).map((productId) => {
    const productList = productsListById[productId]
    const quantity = productList.length
    const product = productList[0]
    return {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price * quantity,
      quantity,
      product,
    }
  })

  const deliveryCost = products && products.length > 5 ? 0 : 3.5

  const totalItems =
    itemsListFormatted &&
    itemsListFormatted.reduce((acc, item) => {
      return acc + item.price
    }, 0)

  const hasItems = products && products.length > 0

  return (
    <ItemsSectionContainer>
      {!hasItems && <EmptyItemList />}
      {hasItems && (
        <>
          <ItemsListContainer>
            {itemsListFormatted &&
              itemsListFormatted.map((item) => (
                <ItemsListRow
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onAddItem={() => handleAddCoffee(item.product)}
                  onRemoveItem={() => handleRemoveCoffee(item.product)}
                />
              ))}
          </ItemsListContainer>
          <ItemsTotalContainer>
            <ItemsTotalRow>
              <ItemsTotalRowTextSecondary>Total de itens</ItemsTotalRowTextSecondary>
              <ItemsTotalRowTextSecondary>
                {formatPriceNumber(totalItems)}
              </ItemsTotalRowTextSecondary>
            </ItemsTotalRow>
            <ItemsTotalRow>
              <ItemsTotalRowTextSecondary>
                {deliveryCost === 0 ? 'Frete grátis' : 'Taxa de entrega'}
              </ItemsTotalRowTextSecondary>
              <ItemsTotalRowTextSecondary>
                {formatPriceNumber(deliveryCost)}
              </ItemsTotalRowTextSecondary>
            </ItemsTotalRow>
            <ItemsTotalRow>
              <ItemsTotalRowTextPrimary>Total</ItemsTotalRowTextPrimary>
              <ItemsTotalRowTextPrimary>
                {formatPriceNumber(totalItems + deliveryCost)}
              </ItemsTotalRowTextPrimary>
            </ItemsTotalRow>
          </ItemsTotalContainer>

          <CartConfirmButton type="submit">Confirmar pedido</CartConfirmButton>
        </>
      )}
    </ItemsSectionContainer>
  )
}
