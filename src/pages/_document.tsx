import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-black">
      <Head />
      <body className="min-h-full text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 