import { Product } from '../../../../entities/product'
import { CoffeeCard } from './coffee-card/CoffeeCard'
import { CoffeeListContainer } from './CoffeeList.styles'

interface CoffeeListProps {
  coffeeList: Product[]
}

export function CoffeeList({ coffeeList }: CoffeeListProps) {
  return (
    <CoffeeListContainer>
      {coffeeList.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </CoffeeListContainer>
  )
}
