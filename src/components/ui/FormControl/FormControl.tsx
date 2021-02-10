import React from 'react'
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';

const MyFormControl: React.FC<FormControlProps> = (props) => {
  return (
    <FormControl {...props} />
  )
}

export default MyFormControl