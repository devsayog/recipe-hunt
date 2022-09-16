import Image from 'next/image'
import Link from 'next/link'

import type { Category } from '@/types/category'

import { Heading3, Paragraph } from './Typography'

interface ICategoryCardProps {
  category: Category
}
const CategoryCard = ({ category: c }: ICategoryCardProps) => {
  return (
    <Link href={`/category/${c.strCategory.toLowerCase()}`}>
      <a className="card-item">
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
        <Paragraph sm text={`${c.strCategoryDescription.slice(0, 100)}...`} />
      </a>
    </Link>
  )
}

export default CategoryCard
