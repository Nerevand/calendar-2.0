import React from 'react'
import TextField, { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';



const MuiTextField: React.FC<MuiTextFieldProps> = (props) => {
  return (
    <TextField {...props} />
  )
}

export default MuiTextField