import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  
  import Home from "./pages/home";
  import Pagina2 from "./pages/pagina2";

  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/P" element={<Pagina2 />} />
      </>
    )
  );
  
  export default routes;