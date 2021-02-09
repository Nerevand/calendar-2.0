import React from 'react'
import MuiDialogActions from '@material-ui/core/DialogActions'

const DialogActions = React.forwardRef(function DialogActions(props, ref) {
  return <MuiDialogActions {...props} ref={ref} />
})

DialogActions.muiName = 'DialogActions'

DialogActions.defaultProps = {
  disableSpacing: true,
}

export default DialogActions
