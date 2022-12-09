import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './components/ProtectedRoute/ProtectedRoute';

import { AddProduct } from './view/AddProduct/AddProduct';
import { Auth } from './view/Auth/Auth';
import { Dashboard } from './view/Dashborad/Dashboard';
import { useAppSelector } from './util/redux/hook';
function App() {
  const isAuthenticated = useAppSelector((state)=>state.auth.isAuthenticated)

  return (
    <div className="App">
     <Router>
      <Routes>
        <Route element={<PrivateRoutes isAuthenticated={isAuthenticated!}/>}>
          <Route element={<Dashboard/>} path='/dashboard'/>
          <Route element={<AddProduct/>} path='/add-product'/>
        </Route>
        <Route element={<Auth/>} path='/auth'/>
     </Routes>
     </Router>

    </div>
  );
}

export default App;
