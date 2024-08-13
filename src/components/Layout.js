import Header from "./Header";
import Footer from "./Footer";

/* eslint-disable react/prop-types */
export default function Layout({ children }) {
  const { orderData, orderTotal, category, setCategory } = children;

  return (
    <>
      <Header orderData={orderData} orderTotal={orderTotal} category={category} setCategory={setCategory} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
