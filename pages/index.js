import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head><title>Home</title></Head>
      The Home Page
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/product/mobile">Mobile</Link>
        </li>
        <li>
          <Link href="/product/leptop">Leptop</Link>
        </li>
      </ul>
     

      < Image src="/images/pd.png" height={400} width= {400}  />
      <h1>next js is a very good for the developing a web
      </h1>

    </div>
  )
}
