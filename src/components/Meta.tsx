import Head from 'next/head'
import { useRouter } from 'next/router'

interface IMetaTypes {
  pageTitle?: string
  description?: string
}

const Meta = ({
  pageTitle,
  description = 'Search and find perfect recipe for you',
}: IMetaTypes) => {
  const router = useRouter()
  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://recipe-hunt.vercel.app'
      : 'http://localhost:3000'
  const ogUrl = `${url}${router.asPath}`
  const ogImage = `${url}/meta.png`
  const title = pageTitle
    ? `${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)} - Recipe Hunt`
    : 'Recipe Hunt'
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="recipe-hunt.vercel.app" />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
export default Meta
