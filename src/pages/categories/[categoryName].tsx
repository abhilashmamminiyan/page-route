import Head from 'next/head'
import ProductCard from "../../components/product-card/ProductCard"
import { ProductService } from "../../services/products-services"
import { GetServerSideProps } from 'next'

interface CategoryProductProps {
  categoryName: string
  productList: any[]
}

export default function CategoryProduct({ 
  categoryName, 
  productList 
}: CategoryProductProps) {
  return (
    <>
      <Head>
        <title>{categoryName} Products</title>
      </Head>
      <div>
        category : {categoryName} <br />
        <br />
        <h3>{categoryName} Products</h3>
        <div className="d-flex flex-wrap gap-2">
          {productList.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryName, productId } = context.params as { 
    categoryName: string
    productId: string 
  }
  
  const decodedCategory = decodeURIComponent(categoryName)
  const productList = await ProductService.getProductsByCategory(decodedCategory)
  
  return {
    props: {
      categoryName: decodedCategory,
      productList
    }
  }
}