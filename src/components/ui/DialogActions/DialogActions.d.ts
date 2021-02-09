import * as React from 'react'
import { DialogActionsProps as MuiDialogActionsProps } from '@material-ui/core/DialogActions'

export interface DialogActionsProps extends MuiDialogActionsProps {}

declare const DialogActions: React.ComponentType<DialogActionsProps>
export default DialogActions
