import Image from 'next/image'

import Button from '@/components/Button'
import { Heading2, Heading3, Paragraph } from '@/components/Typography'

const Home = () => {
  return (
    <>
      <section className="mx-auto max-w-sm md:flex md:max-w-none md:items-center">
        <Image
          src="/recipe.webp"
          alt="Recipe"
          layout="intrinsic"
          height={350}
          width={450}
          className="object-cover"
        />
        <div className="flex-1 text-center md:order-[-1]">
          <div className="mt-4 space-y-2 md:mt-0  md:pr-5">
            <Heading2>
              the perfect{' '}
              <span className="font-medium text-pink-500">meal recipe</span> for
              you
            </Heading2>
            <Paragraph text="Recipe for diffrent meals can be found here." />
            <div className="space-x-2 pt-2">
              <Button href="/category" text="Explore" />
              <Button href="/favourite" secondary text="Favourites" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Heading3 text="About us" />
        <Paragraph
          className="mt-2 md:mt-3"
          text="Recipe Hunt is a web app where you can find perfect recipe for you.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos accusantium tempora voluptas reprehenderit fugiat sed repellendus molestiae! Nobis, impedit."
        />
        <Paragraph text="Recipe Hunt is a web app where you can find perfect recipe for you.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos accusantium tempora voluptas reprehenderit fugiat sed repellendus molestiae! Nobis, impedit." />
      </section>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      data: 'hello',
    },
  }
}
export default Home
