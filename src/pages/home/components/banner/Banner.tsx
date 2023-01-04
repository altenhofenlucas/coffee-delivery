import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  BannerContainer,
  BannerLeft,
  BannerLeftItems,
  BannerLeftTitle,
  BannerRight,
} from './Banner.styles'
import { DefaultTheme } from '../../../../styles/theme/Default'

import bannerImage from '../../../../assets/banner-image.svg'
import { TextWithIcon } from '../../../../components/text-with-icon/TextWithIcon'

export function Banner() {
  const { colors } = DefaultTheme

  return (
    <BannerContainer>
      <BannerLeft>
        <BannerLeftTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </BannerLeftTitle>
        <BannerLeftItems>
          <TextWithIcon
            icon={<ShoppingCart weight="fill" size={16} />}
            iconBackgroundColor={colors.yellowDark}
            text="Compra simples e segura"
          />
          <TextWithIcon
            icon={<Package weight="fill" size={16} />}
            iconBackgroundColor={colors.baseText}
            text="Embalagem mantém o café intacto"
          />
          <TextWithIcon
            icon={<Timer weight="fill" size={16} />}
            iconBackgroundColor={colors.yellow}
            text="Entrega rápida e rastreada"
          />
          <TextWithIcon
            icon={<Coffee weight="fill" size={16} />}
            iconBackgroundColor={colors.purple}
            text="O café chega fresquinho até você"
          />
        </BannerLeftItems>
      </BannerLeft>
      <BannerRight>
        <img src={bannerImage} alt="" />
      </BannerRight>
    </BannerContainer>
  )
}
