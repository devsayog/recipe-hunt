import React from 'react'

import { Heading2, Paragraph } from '../Typography'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-4 text-center">
      <Heading2>recipe hunt</Heading2>
      <Paragraph text="Find the perfect meals recipe for you" />
      <Paragraph text="&copy; developed by using TheMealDB" sm />
    </footer>
  )
}

export default Footer
