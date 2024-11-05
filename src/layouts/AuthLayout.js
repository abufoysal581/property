import React from 'react';
// import './assets/node_modules/bootstrap/css/bootstrap.min.css';
// import './assets/node_modules/perfect-scrollbar/css/perfect-scrollbar.css';
// import './assets/node_modules/morrisjs/morris.css';
// import './assets/node_modules/c3-master/c3.min.css';

function AuthLayout({children}) {
  return (
    <div id="auth">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-12 mx-auto">
                    <div className="card pt-4">
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout