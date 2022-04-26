import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="quotes" replace />} />
        <Route path="quotes" element={<Outlet />}>
          <Route index element={<Quotes />} />
          <Route path="new" element={<NewQuote />} />
          <Route path=":quoteId/*" element={<QuoteDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
