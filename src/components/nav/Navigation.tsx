import Link from "next/link"
import React from "react"
import { useCart } from "../../context/cartContext"

export default function Navigation() {
  const { getCartCount } = useCart()
  
  return (
    <div>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about-us">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact-us">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link position-relative" href="/carts">
            Cart
            {getCartCount() > 0 && (
              <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger">
                {getCartCount()}
                <span className="visually-hidden">items in cart</span>
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  )
}