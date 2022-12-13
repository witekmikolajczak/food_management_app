import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './components/ProtectedRoute/ProtectedRoute';

import { AddProduct } from './view/AddProduct/AddProduct';
import { Auth } from './view/Auth/Auth';
import { Dashboard } from './view/Dashborad/Dashboard';
import { Landing } from './view/Landing/Landing';
import { useAppSelector } from './features/redux/hook';
function App() {
  const isAuthenticated = useAppSelector((state)=>state.auth.isAuthenticated)
  const test = useAppSelector((state)=>state.auth)
  console.log(test);
  
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route element={<PrivateRoutes isAuthenticated={isAuthenticated!}/>}>
          <Route element={<Dashboard/>} path='/dashboard'/>
          <Route element={<AddProduct/>} path='/add-product'/>
        </Route>
        <Route element={<Landing/>} path='/'/>
        <Route element={<Auth/>} path='/auth'/>
     </Routes>
     </Router>

    </div>
  );
}

export default App;
