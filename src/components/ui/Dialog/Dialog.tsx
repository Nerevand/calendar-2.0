import React from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog';

const MuiDialog: React.FC<DialogProps> = (props) => {
  return (
    <Dialog {...props} />
  )
}

export default MuiDialog