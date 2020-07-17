import React from 'react'
import { MjmlText } from 'mjml-react'

const FormattedText = (props) => (
  <MjmlText color={props.color} font-size={props.fontSize}>
    {props.children}
  </MjmlText>
)

FormattedText.defaultProps = {
  fontSize: '14px',
  color: 'black',
}

export default FormattedText
