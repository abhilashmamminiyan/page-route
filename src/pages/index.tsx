import Image from "next/image"
import Head from "next/head"



export default function Home() {
  return (
    <>
      <Head>
        <title>Quick Ecomm - Home</title>
      </Head>
      <div>
        <h1>This is Home Page</h1>
        <Image 
          src={'/image1.jpg'}
          alt="sample image"
          width={300} 
          height={300} 
        />
        <Image 
          src={'/image1.jpg'}
          alt="sample image"
          width={300} 
          height={300} 
        />
        <Image 
          src={'/image1.jpg'}
          alt="sample image"
          width={300} 
          height={300} 
        />
      </div>
    </>
  )
}