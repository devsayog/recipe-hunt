import Link from 'next/link'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'

interface IProps {
  children: ReactNode
  href: string
  className: string
}
type Ref = HTMLAnchorElement
const MyLink = forwardRef<Ref, IProps>((props, ref) => {
  const { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

MyLink.displayName = 'MyLink'
export default MyLink
