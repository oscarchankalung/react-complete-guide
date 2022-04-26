import { Routes, Route, Navigate, Link } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index elemewnt={<Navigate to="welcome" replace />} />
        <Route path="welcome/*" element={<Welcome />}>
          <Route index element={<Link to="new-user">New User</Link>} />
          <Route path="new-user" element={<p>Welcome, new user!</p>} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
