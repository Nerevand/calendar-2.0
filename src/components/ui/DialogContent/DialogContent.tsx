import * as React from 'react'
import MuiDialogContent, {
  DialogContentProps as MuiDialogContentProps,
} from '@material-ui/core/DialogContent'

export type DialogContentRefType = MuiDialogContentProps['ref']

export interface DialogContentProps extends React.PropsWithoutRef<MuiDialogContentProps> {}

const DialogContent = React.forwardRef(function DialogContent(
  props: DialogContentProps,
  ref: DialogContentRefType
) {
  return <MuiDialogContent ref={ref} {...props} />
})

export default DialogContent
