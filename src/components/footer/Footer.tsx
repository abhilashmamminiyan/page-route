"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    console.log("Fetch call from useEffect");
    //     fetch("https://fakestoreapi.com/products")
    //     .then((response)=> response.json())
    //     .then((data)=> console.log(data))
    //     .catch((error)=> console.log("Error fetching data :", error))
  }, []);

  console.log("Display Footer");

  return (
      <div>
        <div className="container">
          {" "}
          <footer className="py-3 my-4">
            {" "}
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              {" "}
              <li className="nav-item">
                <Link href="/" className="nav-link px-2 text-body-secondary">
                  Home
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link href="/products" className="nav-link px-2 text-body-secondary">
                  Products
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link href="/about-us" className="nav-link px-2 text-body-secondary">
                  About Us
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link href="/contact-us" className="nav-link px-2 text-body-secondary">
                  Contact Us
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link href="/carts" className="nav-link px-2 text-body-secondary">
                  Cart
                </Link>
              </li>{" "}
            </ul>{" "}
            <p className="text-center text-body-secondary">© 2025 Quick Ecomm, Inc</p>{" "}
          </footer>{" "}
        </div>
      </div>
  );
}
