import React from 'react'

import Button from './Button'
import { Paragraph } from './Typography'

interface IErrorMessageProps {
  text: string
  showButton?: boolean
}
const ErrorMessage = ({ text, showButton }: IErrorMessageProps) => {
  return (
    <div className={`wrapper ${showButton && 'space-y-3'}`}>
      <Paragraph text={text} className="bg-red-800/30 py-2 px-5 text-red-200" />
      {showButton && <Button href="/" text="go back to home" />}
    </div>
  )
}

export default ErrorMessage
