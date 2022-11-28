import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';
import { Button } from './components/Button/Button';

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p onClick={() => navigate('/auth')}>Navigate to login</p>
      <p onClick={() => navigate('/dashboard')}>
        Navigate to dashboard
      </p>
      <Outlet />
    </div>
  );
}

export default App;
