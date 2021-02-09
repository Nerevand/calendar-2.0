import React from 'react'
import MuiDialogTitle, {
  DialogTitleProps as MuiDialogTitleProps,
} from '@material-ui/core/DialogTitle'

import Typography, { TypographyProps } from 'components/ui/Typography'

export type DialogTitleRefType = MuiDialogTitleProps['ref']

export interface DialogTitleProps extends React.PropsWithoutRef<MuiDialogTitleProps> {
  disableTextTransform?: boolean
  TypographyProps?: TypographyProps
}

const DialogTitle: React.FC<DialogTitleProps> = React.forwardRef(function DialogTitle(
  props,
  ref: DialogTitleRefType
) {
  const { children, disableTypography, disableTextTransform, TypographyProps, ...other } = props

  return (
    <MuiDialogTitle ref={ref} disableTypography {...other}>
      {disableTypography ? (
        children
      ) : (
          <Typography
            semiBold
            variant="h2"
            {...TypographyProps}
          >
            {children}
          </Typography>
        )}
    </MuiDialogTitle>
  )
})

export default DialogTitle
