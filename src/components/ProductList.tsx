import React from 'react'
import ProductCard from './product-card/ProductCard'

interface ProductListProps {
  products: any[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className='d-flex flex-wrap gap-3'>
      {products.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}