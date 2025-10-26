import { useRouter } from "next/router"
import { useCart } from "../context/cartContext"

export default function GotoCartButton() {
  const router = useRouter()
  const { getCartCount } = useCart()
  
  return (
    <div className="d-flex gap-2 mb-3">
      <button
        className="btn btn-warning"
        onClick={() => {
          router.push("/carts")
        }}
      >
        Go to Cart (push) {getCartCount() > 0 && `(${getCartCount()})`}
      </button>
      <button 
        className="btn btn-danger"
        onClick={() => {
          router.replace('/carts')
        }}
      >
        Go to Cart (replace)
      </button>
    </div>
  )
}