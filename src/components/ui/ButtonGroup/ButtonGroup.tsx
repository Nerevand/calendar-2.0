import React from 'react'
import ButtonGroup, { ButtonGroupProps } from '@material-ui/core/ButtonGroup';



const MyButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroup {...props} />
  )
}

export default MyButtonGroup