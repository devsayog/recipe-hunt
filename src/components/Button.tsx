import Link from 'next/link'
import React from 'react'

interface IButtonProps {
  href: string
  text: string
  secondary?: boolean
}
const Button = ({ href, text, secondary }: IButtonProps) => {
  return (
    <Link href={href}>
      <a
        className={`focus rounded py-1.5 px-3 font-mirza capitalize text-gray-100 shadow transition hover:bg-red-500/80 md:text-lg xl:text-xl 2xl:text-2xl ${
          secondary ? 'bg-zinc-600' : 'bg-emerald-600'
        }`}
      >
        {text}
      </a>
    </Link>
  )
}

export default Button
