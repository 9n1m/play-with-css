import type { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-css-mobile-app-development-flaticons-lineal-color-flat-icons-3.png"
        />
      </Head>
      <main>{children}</main>
    </>
  )
}
