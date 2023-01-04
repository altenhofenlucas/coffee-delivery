import { TextWithIconContainer, TextWithIconIconContainer } from './TextWithIcon.styles'

interface TextWithIconProps {
  icon?: React.ReactNode
  iconBackgroundColor?: string
  text: string
}

export function TextWithIcon({ icon, iconBackgroundColor, text }: TextWithIconProps) {
  return (
    <TextWithIconContainer>
      <TextWithIconIconContainer iconBackgroundColor={iconBackgroundColor}>
        {icon}
      </TextWithIconIconContainer>
      {text}
    </TextWithIconContainer>
  )
}
