import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-black">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-128-inverted.png" type="image/png" sizes="128x128" />
        <link rel="icon" href="/icon-64-inverted.png" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/icon-128-inverted.png" />
      </Head>
      <body className="min-h-full text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 