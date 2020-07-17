import React from 'react'
import { MjmlButton } from 'mjml-react'

const Button = (props) => (
  <MjmlButton
    href={props.href}
    color={props.color}
    background-color={props.backgroundColor}
    border-radius={props.borderRadius}
  >
    {props.img && (
      <img
        src="https://mjml.io/assets/img/mjml-logo.png"
        style="width:24px; vertical-align:middle; padding-right: 8px"
      />
    )}
    {props.children}
  </MjmlButton>
)

Button.defaultProps = {
  borderRadius: '4px',
  color: 'black',
  backgroundColor: 'F45E43',
}

export default Button
