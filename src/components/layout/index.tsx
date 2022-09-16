import type { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto max-w-7xl grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
