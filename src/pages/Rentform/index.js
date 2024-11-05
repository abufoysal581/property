import React, {useState} from 'react'
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout'
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
function Rentform() {

  const [inputs, setInputs] = useState([]);
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

      // Append images to formData
      for (let i = 0; i < selectedFiles.length; i++) {
          formData.append('files[]', selectedFiles[i]);
      }

      // Append other form inputs to formData
      for (const property in inputs) {
          formData.append(property, inputs[property]);
      }
      
      try{
          let apiurl=`/requestsforrent/create`;
          
          let response= await axios({
              method: 'post',
              responsiveTYpe: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl}`,
              data: formData,
              headers: {
                  'Content-Type': 'multipart/form-data',
              }
          });
          navigate('/requestsforrent')
      } 
      catch(e){
          console.log(e);
      }
  }


  return (
    <AdminLayout>


<div>
  <div className="container mt-5">
        <h2>Request to Rent a Property</h2>
        <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email Address</label>
                <input type="text" className="form-control" id="email" name="email" onChange={handleChange}  required/>
            </div>
             <div className="mb-3">
                <label for="phone" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange}  required/>
            </div>
            <div className="mb-3">
                <label for="rental_duration" className="form-label">Request Date</label>
                <input type="text" className="form-control" id="rental_duration" name="rental_duration" onChange={handleChange}  required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
    </div>
</div>



    </AdminLayout>       
  )
}

export default Rentform