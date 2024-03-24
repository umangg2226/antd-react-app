import React from 'react'
import { Typography } from 'antd'
import { CenterContent } from '../center-content'

export const ErrorFallbackRoot: React.FC = () => {
  return (
    <CenterContent>
      <Typography>Something went wrong. Try refreshing the page.</Typography>
    </CenterContent>
  )
}
