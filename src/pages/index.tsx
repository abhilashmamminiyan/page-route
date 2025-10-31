import Image from "next/image";
import Head from "next/head";
import { ProductService } from "@/services/products-services";
import Link from "next/link";

interface ProductsProps {
  products: any[];
}

export default function Home({ products }: ProductsProps) {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <Head>
        <title>Quick Ecomm - Home</title>
      </Head>
      <div className="row ">
        <h1>This is Home Page</h1>
        <Image className="col"
          src={"/image1.jpg"}
          alt="sample image"
          width={300}
          height={300}
        />
        <Image className="col"
          src={"/image1.jpg"}
          alt="sample image"
          width={300}
          height={300}
        />
        <Image className="col"
          src={"/image1.jpg"}
          alt="sample image"
          width={300}
          height={300}
        />
      </div>
      <br />
      <div className="row">
        <div className="col-6">
        
      <h3>Categories</h3><br/>
      <div className="d-flex gap-4">
        
        {categories.map((cat, index) => (
          <Link
            className="text-decoration-none"
            href={`categories/${cat}`}
            key={index}
          >
            {cat.toUpperCase()}
          </Link>
        ))}
      </div>
      </div>
      <div className="col-6">
      <h3 className="my-4">Dynamic Search</h3>
      <div className="d-flex gap-4">
        
        {categories.map((cat, index) => (
          <Link
            className="text-decoration-none"
            href={`search/${cat}`}
            key={index}
          >
            {cat.toUpperCase()}
          </Link>
        ))}
      </div>
      </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context: any) {
  const products = await ProductService.getProducts();
  return {
    props: {
      products,
    },
  };
}
