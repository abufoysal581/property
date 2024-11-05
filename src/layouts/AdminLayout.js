import React from 'react';
import Header from './include/header';

import Footer from './include/footer';





function AdminLayout({children}) {
  return (
    <div className="wrapper">
    {/* <!-- Sidebar --> */}
    <Header />
    {/* <!-- End Sidebar --> */}

    <div className="main-panel">
   

      <div className="container">
      <main>{children}</main>
      </div>
      
       <Footer />
    </div>

  
  </div>
  )
}

export default AdminLayout