import { HomeContainer, HomeContent, HomeTitle } from './Home.styles'
import { coffees } from '../../data/coffees'
import { Banner } from './components/banner/Banner'
import { CoffeeList } from './components/coffee-list/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <HomeContent>
        <HomeTitle>Nossos cafés</HomeTitle>
        <CoffeeList coffeeList={coffees} />
      </HomeContent>
    </HomeContainer>
  )
}
