import AdminPage from "./AdminPage"
import Router from "./Router";

import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <AdminPage/>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
