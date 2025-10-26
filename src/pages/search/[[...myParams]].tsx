import Head from 'next/head'
import { GetServerSideProps } from 'next'

interface DynamicSearchProps {
  category?: string
  group?: string
  brand?: string
  modelNo?: string
}

export default function DynamicSearch({ 
  category, 
  group, 
  brand, 
  modelNo 
}: DynamicSearchProps) {
  return (
    <>
      <Head>
        <title>Dynamic Search</title>
      </Head>
      <div>
        DynamicSearch : {category}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const myParams = context.params?.myParams as string[] | undefined
  
  return {
    props: {
      category: myParams?.[0] || null,
      group: myParams?.[1] || null,
      brand: myParams?.[2] || null,
      modelNo: myParams?.[3] || null
    }
  }
}