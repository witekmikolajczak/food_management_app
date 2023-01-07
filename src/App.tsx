import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./components/ProtectedRoute/ProtectedRoute";

import { AddProduct } from "./view/Product/AddProduct/AddProduct";
import { EditProduct } from "./view/Product/EditProduct/EditProduct";
import { EditDetailProduct } from "./view/Product/EditProduct/EditDetailProduct";
import { Auth } from "./view/Auth/Auth";
import { AfterAuth } from "./view/Auth/AfterAuth";
import { Dashboard } from "./view/Dashborad/Dashboard";
import { Landing } from "./view/Landing/Landing";
import { AddRecipe } from "./view/Recipt/AddRecipt/AddRecipe";
import { EditRecipt } from "./view/Recipt/EditRecipt/EditRecipt";
import { EditDetailRecipt } from "./view/Recipt/EditDetailRecipt/EditDetailRecipt";

import { useAppSelector } from "./features/redux/hook";

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated!} />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<AddProduct />} path="/add-product" />
            <Route element={<EditProduct />} path="/edit-product" />
            <Route element={<EditDetailProduct />} path="/edit-product/:id" />

            <Route element={<AddRecipe />} path="/add-recipt" />
            <Route element={<EditRecipt />} path="/edit-recipt" />
            <Route element={<EditDetailRecipt />} path="/edit-recipt/:id" />
          </Route>
          <Route element={<Landing />} path="/" />
          <Route element={<Auth />} path="/auth" />
          <Route element={<AfterAuth />} path="/afterAuth" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
