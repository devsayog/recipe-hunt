import Link from 'next/link'

interface IAppLinkProps {
  text: string
  href: string
}
const AppLink = ({ text, href }: IAppLinkProps) => {
  return (
    <Link href={href}>
      <a className="focus rounded-2xl bg-red-500/60 px-5 py-1 text-center shadow-lg transition-colors hover:bg-red-600 hover:text-gray-200 xl:text-lg">
        {text}
      </a>
    </Link>
  )
}

export default AppLink
