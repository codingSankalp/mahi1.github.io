import styles  from '../styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head';

export default function AboutPage() {
    return (
      <div>
         <Head><title>About</title></Head>
       <h1> The About Page</h1>
        <h2 className={styles.red}>this is very good</h2>
        < Image src="/images/pd.png" height={400} width= {400}  />
      </div>
      
    
    )
    }