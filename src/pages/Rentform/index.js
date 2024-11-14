import React, {useState} from 'react'
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout'
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
function Rentform() {

    const userdata=JSON.parse(localStorage.getItem('front_userdata'));
    const { property_id } = useParams();
    const [inputs, setInputs] = useState({client_id:userdata.id,property_id:property_id,client_name:userdata.client_name,email:userdata.email,phone:userdata.phone,rent_from:userdata.rent_from,rent_to:userdata.rent_to});
    const navigate=useNavigate();
    const [selectedFiles, setSelectedFiles] = useState([]); // For image
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    // Handle file input for images
    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    }

    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(inputs)

      const formData = new FormData();

      
      try{
          let apiurl=`/requestsforbuying/create`;
          
          let response= await axios({
              method: 'post',
              responsiveTYpe: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl}`,
              data: inputs,
              headers: {
                  'Content-Type': 'multipart/form-data',
              }
          });
          alert('form submited successfully');
          navigate('/')
      } 
      catch(e){
          console.log(e);
      }
  }


  return (
    <AdminLayout>


<div>
  <div className="container mt-5">
        <h2>Submit your request to rent</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" defaultValue={inputs.client_name} name="client_name" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email Address</label>
                <input type="text" className="form-control" id="email" defaultValue={inputs.email} name="email" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone" defaultValue={inputs.phone} name="phone" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Rent from</label>
                <input type="text" className="form-control" id="rent_from" defaultValue={inputs.rent_from} name="rent_from" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Rent to</label>
                <input type="text" className="form-control" id="rent_to" defaultValue={inputs.rent_to} name="rent_to" onChange={handleChange}  required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
    </div>
</div>



    </AdminLayout>       
  )
}

export default Rentform