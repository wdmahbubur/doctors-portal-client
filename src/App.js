import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appointment from './components/pages/Appointment/Appointment';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Context from './context/context';
import RequireAuth from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AddDoctor from './components/pages/Dashboard/AddDoctor/AddDoctor';
import AddAdmin from './components/pages/Dashboard/AddAdmin/AddAdmin';
import DashboardHome from './components/pages/Dashboard/DashboardHome/DashboardHome';
import AdminRoute from './components/AdminRoute/AdminRoute';


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
            <Route path="/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }>
              <Route index element={<DashboardHome />} />
              <Route path="add-doctor" element={
                <AdminRoute>
                  <AddDoctor />
                </AdminRoute>
              } />
              <Route path="add-admin" element={
                <AdminRoute>
                  <AddAdmin />
                </AdminRoute>
              } />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>

  );
}

export default App;
