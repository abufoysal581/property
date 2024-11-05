import * as React from 'react';


// import Register from './pages/Register';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Properties from './pages/properties';
// import Requestproperty from './pages/Requestproperty';
import Buyform from './pages/Buyform';
import Rentform from './pages/Rentform';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;

  return (
    <BrowserRouter>
      <Routes>

           {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          {/* <Route path="/requestproperty" element={<Requestproperty />} /> */}
          <Route path="/buyform" element={<Buyform />} />
          <Route path="/rentform" element={<Rentform />} />
         

      </Routes>
    </BrowserRouter>
  );
}

export default App;
