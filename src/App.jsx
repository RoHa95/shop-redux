import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/PageNotFound";
// import ProductsProvider from "./context/ProductContext";
// import CartProvider from "./context/CartContext";
function App() {
  return (
    <div>
      {/* <CartProvider> */}
        <Layout>
          {/* <ProductsProvider> */}
            <Routes>
              <Route path="/" element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          {/* </ProductsProvider> */}
        </Layout>
      {/* </CartProvider> */}
    </div>
  );
}

export default App;
