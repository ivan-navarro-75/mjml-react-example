import React from 'react'
import { MjmlText } from 'mjml-react'

type Props = {
  color: string
  fontSize: string
  children: React.ReactNode
}

const FormattedText = (props: Props) => (
  <MjmlText color={props.color} font-size={props.fontSize}>
    {props.children}
  </MjmlText>
)

FormattedText.defaultProps = {
  fontSize: '14px',
  color: 'black',
}

export default FormattedText
