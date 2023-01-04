import {
  EmptyItemListContainer,
  EmptyItemListImage,
  EmptyItemListText,
} from './EmptyItemList.styles'

import emptyCoffee from '../../../../../../assets/empty-coffee.svg'
import { Link } from 'react-router-dom'

export function EmptyItemList() {
  return (
    <EmptyItemListContainer>
      <EmptyItemListImage src={emptyCoffee} alt="Carrinho vazio" />
      <EmptyItemListText>
        Seu carrinho está vazio!
        <br />
        <Link to="/">escolha um café e adicione ao carrinho</Link>
      </EmptyItemListText>
    </EmptyItemListContainer>
  )
}
