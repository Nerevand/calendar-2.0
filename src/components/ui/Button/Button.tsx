import React from 'react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'

export interface ButtonProps extends MuiButtonProps {
  component?: React.ElementType
}

const Button: React.FC<ButtonProps> = ({
  children,
  ...otherButtonProps
}) => {
  return (
    <MuiButton {...otherButtonProps}>
      {children}
    </MuiButton>
  )
}

export default Button