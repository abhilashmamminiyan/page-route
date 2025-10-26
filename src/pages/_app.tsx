import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/context/cartContext";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div className="container">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      </div>
    </CartProvider>
  );
}
