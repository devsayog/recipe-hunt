import type { ReactNode } from 'react'

interface IHeading2Props {
  children: ReactNode
}
export const Heading2 = ({ children }: IHeading2Props) => {
  return (
    <h2 className="font-mirza text-2xl capitalize sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
      {children}
    </h2>
  )
}
interface IParagraphProps {
  text: string
  className?: string
  sm?: boolean
}
export const Paragraph = ({ text, className, sm }: IParagraphProps) => {
  const classes = sm
    ? `text-xs md:text-sm xl:text-base 2xl:text-lg ${className}`
    : `text-sm md:text-base xl:text-lg ${className}`

  return <p className={classes}>{text}</p>
}
