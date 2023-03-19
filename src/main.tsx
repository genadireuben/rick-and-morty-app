import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import "./index.css";
import Loading from "./components/Loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<NotFound />} />
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
