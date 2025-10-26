import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "../../context/cartContext";

export default function ProductCard(props: any) {
  const prod = props.product;
  const router = useRouter();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addToCart(prod);

    // Reset button state after animation
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="border rounded">
      <div
        className=" d-flex flex-row  gap-3"
        style={{ width: "25rem", height: "10rem" }}
      >
        <img
          src={prod.image}
          className="card-img-top h-75 w-25 object-fit-contain m-2"
          alt={prod.title}
        />
        <div className="card-body">
          <p className="card-text w-75 pt-3" style={{ fontSize: "0.8em" }}>
            {prod.title}
          </p>
          <p className="fw-bold text-success">${prod.price?.toFixed(2)}</p>
          
        </div>
        
      </div>
      <div className="d-flex flex-row w-100 text-left justify-content-around">
            <button
              className={`btn ${isAdding ? "btn-success" : "btn-warning"}
               h-25 mb-3 mt-2`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? "✓ Added!" : "Add to Cart"}
            </button>

            <button
              className="btn btn-primary w-25 h-25 mb-3 mt-2"
              onClick={() => {
                router.push(`/products/${prod.id}`, undefined, {
                  scroll: false,
                });
              }}
            >
              Details
            </button>
            <button
          className="btn btn-success w-25 mb-3 mt-2"
          style={{ fontSize: "0.8rem" }}
          onClick={() => {
            router.push("/products?title=" + prod.title, undefined, {
              scroll: true,
            });
          }}
        >
          Same page
        </button>
          </div>
    </div>
  );
}
