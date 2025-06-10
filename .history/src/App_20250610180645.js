import AdminPage from "./AdminPage"
import Router from "./Router";
function App() {
  return (
    <>
      <AdminPage/>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
