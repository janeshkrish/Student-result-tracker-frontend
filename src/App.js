import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toasity/dist/ReactToastify.css';
import AuthProvider from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Studentform from './pages/StudentForm';
import StudentDetail from './pages/StudentDetail';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <ProtectedRoute>
      <Router>
        <Routes>
          <Route path ='/' element= {<Navigate to ="/Dashboard" replace /> } />
          <Route path ='/login' element = {<Login/>} />
          <Route path = '/register' element = {<Register/>}/>
          <Route path = '/Dashboard' element = {<ProtectedRoute><Dashboard/></ProtectedRoute>
}/>
          <Route path ='/add-Student' element = {
            <ProtectedRoute>
              <Studentform/>
            </ProtectedRoute>
         }/>

          <Route path ='/edit-student/:id' element = {
            <ProtectedRoute>
              <Studentform/>
            </ProtectedRoute>
          }/>
          <Route path='/student/:id' element = {
            <ProtectedRoute>
              <StudentDetail/>
            </ProtectedRoute>
          }/>
          <Route path ='*' element= {<Navigate to ="/Dashboard" replace /> } />
        </Routes>
        <ToastContainer
            postion = "top-right"
            autoclose = {3000}
            hideProgressBar = {false}
            newestonTop
            closeOnClick
            pauseOnhover
        />
      </Router>
    </ProtectedRoute>
  );
}

export default App;
