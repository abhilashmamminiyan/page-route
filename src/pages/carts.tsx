import Head from 'next/head'
import { useCart } from '../context/cartContext'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal 
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <>
        <Head>
          <title>Cart - Quick Ecomm</title>
        </Head>
        <div className="text-center py-5">
          <h3>Your Cart is Empty</h3>
          <p className="text-muted">Add some products to your cart to see them here.</p>
          <Link href="/products" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Cart ({cartItems.length}) - Quick Ecomm</title>
      </Head>
      <div className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Shopping Cart</h2>
          <button 
            className="btn btn-outline-danger"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="img-fluid rounded-start p-3 object-fit-contain"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{item.title}</h5>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                      <p className="card-text text-muted small">
                        {item.category}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="fw-bold px-3">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <span className="text-muted me-2">${item.price.toFixed(2)} each</span>
                          <span className="fw-bold fs-5">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong className="fs-4">${getCartTotal().toFixed(2)}</strong>
                </div>
                <button className="btn btn-primary w-100 mb-2">
                  Proceed to Checkout
                </button>
                <Link href="/products" className="btn btn-outline-secondary w-100">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Link href="/products#recommended" className="btn btn-link">
            Goto Recommended Section
          </Link>
        </div>
      </div>
    </>
  )
}