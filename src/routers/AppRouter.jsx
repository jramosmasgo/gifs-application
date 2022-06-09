import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/search/:keyword" element={<SearchResults />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
