import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  redirect,
} from "react-router-dom";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Home from "./pages/Home/Home";
import NotFound from "./components/usefulComponents/NotFound";
import Loading from "./components/usefulComponents/Loading";
import { GlobalStyle } from "./globalStyle/GlobalStyle.styles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<NotFound />} />
      <Route path="*" element={<Home />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
