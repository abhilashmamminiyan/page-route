import Navbar from './nav/Navigation'
import Footer from './footer/Footer'
 
export default function Layout({ children }:any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}