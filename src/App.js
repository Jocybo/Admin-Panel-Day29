import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Users from './Users';
import Form from './Form';
import ProForm from './ProForm';
import UserView from './UserView';
import UserEdit from './UserEdit';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Products';
import { UserProvider } from './Usercontext';
import { useState } from 'react';

function App() {

  const  [users,setUsers] = useState([]);

  return (
    <BrowserRouter>
      <div id='wrapper'>
        <UserProvider value={{users,setUsers}}>
          <Sidebar />
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Navbar />
              <div className='container-fluid'>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/pro-form" element={<ProForm />} />
                  <Route path="/user-view/:id" element={<UserView />} />
                  <Route path="/user-edit/:id" element={<UserEdit />} />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
