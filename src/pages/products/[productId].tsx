import Head from 'next/head'
import { ProductService } from '../../services/products-services'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useCart } from '../../context/cartContext'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface ProductDetailProps {
  product: any
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    
    // Add the product multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    
    setTimeout(() => {
      setIsAdding(false)
      router.push('/carts')
    }, 500)
  }

  return (
    <>
      <Head>
        <title>{product.title} - Quick Ecomm</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="py-4">
        <h3 className="mb-4">This is products related page</h3>
        
        <div className="row">
          <div className="col-md-6">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="img-fluid object-fit-contain border rounded p-4"
            />
          </div>
          
          <div className="col-md-6">
            <h2 className="mb-3">{product.title}</h2>
            
            <div className="mb-3">
              <Link href={`/categories/${product.category}`}>
              <span className="badge bg-secondary">{product.category}</span>
              </Link>
            </div>
            
            <div className="mb-3">
              <span className="text-muted me-2">Rating:</span>
              <span className="fw-bold">
                {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
              </span>
            </div>
            
            <h3 className="text-success mb-4">${product.price?.toFixed(2)}</h3>
            
            <p className="mb-4">{product.description}</p>
            
            <div className="d-flex gap-3 mb-3">
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="fw-bold px-3">{quantity}</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <button
                className={`btn ${isAdding ? 'btn-success' : 'btn-warning'} flex-grow-1`}
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? '✓ Adding to Cart...' : 'Add to Cart'}
              </button>
            </div>
            
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => router.push('/products')}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.params as { productId: string }
  
  const product = await ProductService.getProductById(Number(productId))
  
  return {
    props: {
      product
    }
  }
}