import Head from "next/head"
import GotoCartButton from "../../components/GotoCartButton"
import Link from "next/link"
import { Suspense } from "react"
import ProductList from "../../components/ProductList"
import { ProductService } from "../../services/products-services"

interface ProductsProps {
  products: any[]
}

export default function Products({ products }: ProductsProps) {
  return (
    <>
      <Head>
        <title>Products List Page</title>
      </Head>
      <div>
        <GotoCartButton />
        <h3>Products List</h3>
        <Link href="#recommended" prefetch={false}>
          Go to Recommended Section
        </Link>
        <ProductList products={products} />
        
        <h3 id="recommended">Recommended Products</h3>
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {
  // Access cookies
  const authToken = context.req.cookies.authToken
  console.log("token is:", authToken)
  
  // Access headers
  const referer = context.req.headers.referer
  const userAgent = context.req.headers['user-agent']
  const host = context.req.headers.host
  
  console.log("Referer is:", referer)
  console.log("User-Agent:", userAgent)
  console.log("Host:", host)
  
  const products = await ProductService.getProducts()
  
  return {
    props: {
      products
    }
  }
}