import React from 'react'
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@material-ui/core/Typography'

export type TypographyRefType = MuiTypographyProps['ref']

export interface TypographyProps extends React.PropsWithoutRef<MuiTypographyProps> {
  semiBold?: boolean
  underline?: boolean
}



export const Typography = React.forwardRef(function Typography(
  { semiBold, className, underline, ...other }: TypographyProps,
  ref: TypographyRefType
) {


  return <MuiTypography {...other} ref={ref} />
})

Typography.defaultProps = {
  variant: 'body1',
}

export default Typography
