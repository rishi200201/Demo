import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './AdminPage';
import HomePage from './HomePage'; // Assuming you have a HomePage component
import StudentLogin from './student/LoginPage';
import DeanLogin from './dean/LoginPage';
import AdminLogin from './admin/LoginPage';
import Appp from './Admindb/Appp' ;
import StudentInput from './admin/StudentInput';
import NewUser from './admin/NewUser';
import { UserList } from './components/UserList';
import Bulk from './components/csv/Bulk';


const App = () => (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/loginad" element={< AdminLogin/>} />
      <Route path="/AdminDb/Appp" element={<Appp/>}/>
      <Route path="/loginst" element={<StudentLogin />} />
      <Route path="/loginde" element={<DeanLogin />} />
      <Route path="/appp" element={<Appp />} />
      <Route path="/StudentInput" element={<StudentInput />} />
      <Route path="/NewUser" element={<NewUser />} />
      <Route path='/student/list' element={<UserList />} />
      <Route path='/bulk' element={<Bulk />} />
    </Routes>
);

export default App;

