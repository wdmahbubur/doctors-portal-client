import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appointment from './components/pages/Appointment/Appointment';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Context from './context/context';
import RequireAuth from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={
              <RequireAuth>
                <Appointment />
              </RequireAuth>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>

  );
}

export default App;
