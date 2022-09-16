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
interface IHeading3Props {
  text: string
  className?: string
}
export const Heading3 = ({ text, className }: IHeading3Props) => {
  return (
    <h3
      className={`${
        className && className
      } font-mirza text-xl capitalize sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
    >
      {text}
    </h3>
  )
}
export const Heading4 = ({ text, className }: IHeading3Props) => {
  return (
    <h4
      className={`${
        className && className
      } font-mirza text-lg capitalize sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}
    >
      {text}
    </h4>
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
