import Image from 'next/image'
import Link from 'next/link'

import { Heading3, Paragraph } from './Typography'

interface ICategoryCardProps {
  area?: boolean
  category: {
    idCategory?: string
    strCategory: string
    strCategoryThumb: string
    strCategoryDescription?: string
  }
}
const CategoryCard = ({ category: c, area }: ICategoryCardProps) => {
  return (
    <Link
      href={`/${area ? 'area' : 'category'}/${c.strCategory.toLowerCase()}`}
    >
      <a className="card-item transition-transform hover:-translate-y-1">
        <Image
          src={c.strCategoryThumb}
          alt={c.strCategory}
          layout="intrinsic"
          width={400}
          height={250}
          className="object-cover"
        />
        <Heading3
          className="relative -top-2 inline-flex -rotate-6 bg-zinc-900"
          text={c.strCategory}
        />
        {c.strCategoryDescription && (
          <Paragraph sm text={`${c.strCategoryDescription.slice(0, 100)}...`} />
        )}
      </a>
    </Link>
  )
}

export default CategoryCard
