import React,{useState,useEffect} from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link,useNavigate } from 'react-router-dom';
import { clientlogin } from '../../Api/AllApi';
function Login() {
    const navigate = useNavigate();
    const [inputs, setInputs ] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let check = await clientlogin(inputs);
        if(check){
            window.location=process.env.REACT_APP_BASE_URL
        }else{
            alert("Sorry password or email address is wrong!");
        }
    }
  return (
    <AuthLayout>
        <div className="text-center mb-5">
            <img src="assets/images/02 - PNG Property.png" height="80" width="100" className='mb-4'/>
            <h3>Sign In</h3>
            <p>Please sign in to continue to Property</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="form-group position-relative has-icon-left">
                <label for="username">Email</label>
                <div className="position-relative">
                    <input type="text" className="form-control" id="email" name="email" onChange={handleChange}/>
                    <div className="form-control-icon">
                        <i data-feather="user"></i>
                    </div>
                </div>
            </div>
            <div className="form-group position-relative has-icon-left">
                <div className="clearfix">
                    <label for="password">Password</label>
                    <a href="auth-forgot-password.html" className='float-right'>
                        <small>Forgot password?</small>
                    </a>
                </div>
                <div className="position-relative">
                    <input type="text" className="form-control" id="password" name="password" onChange={handleChange}/>
                    <div className="form-control-icon">
                        <i data-feather="lock"></i>
                    </div>
                </div>
            </div>

            <div className='form-check clearfix my-4'>
                <div className="checkbox float-left">
                    <input type="checkbox" id="checkbox1" className='form-check-input' />
                    <label for="checkbox1">Remember me</label>
                </div>
                <div className="float-right">
                    <Link to="/register">Don't have an account?</Link>
                </div>
            </div>
            <div className="clearfix">
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        </form>
    </AuthLayout>
  )
}

export default Login