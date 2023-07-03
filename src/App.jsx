import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import "./App.css";
import Home from "./pages/home";

const BlogListing = lazy(() => import("./pages/blogListing"));
const BlogDetail = lazy(() => import("./pages/blogDetail"));
const BlogUpload = lazy(() => import("./pages/blogUpload"));
function App() {
   return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogListing />} />
            <Route path="/blogdetail/" element={<BlogDetail />} />
            <Route path="/blogUpload" element={<BlogUpload />} />
          </Routes>
        </BrowserRouter>
       </Suspense>
    </>
  );
}

export default App;
