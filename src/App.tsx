import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './components/ProtectedRoute/ProtectedRoute';

import { AddProduct } from './view/AddProduct/AddProduct';
import { Auth} from './view/Auth/Auth';
import { AfterAuth } from './view/Auth/AfterAuth';
import { Dashboard } from './view/Dashborad/Dashboard';
import { Landing } from './view/Landing/Landing';
import { Loading } from './components';
import { useAppSelector } from './features/redux/hook';
function App() {
  const isLoading = useAppSelector((state)=> state.loading.isLoading)
  const isAuthenticated = useAppSelector((state)=>state.auth.isAuthenticated)
  
  
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
     <Route element={<AfterAuth/>} path='/afterAuth'/>
    </Routes>
  </Router>

 </div>
  )
}

export default App;
