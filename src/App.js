import * as React from 'react';


// import Register from './pages/Register';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Properties from './pages/properties';
// import Requestproperty from './pages/Requestproperty';
import Buyform from './pages/Buyform';
import Rentform from './pages/Rentform';
import Buyproperty from './pages/Buyproperty';
import Rentproperty from './pages/Rentproperty';
import Services from './pages/Services';
import PropertyDetails from './pages/PropertyDetails';


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
          <Route path="/buyproperty" element={<Buyproperty />} />
          <Route path="/rentproperty" element={<Rentproperty />} />
          <Route path="/services" element={<Services />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
         

      </Routes>
    </BrowserRouter>
  );
}

export default App;
