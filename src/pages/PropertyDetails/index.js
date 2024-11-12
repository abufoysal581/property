import React, {useState, useEffect} from 'react'
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout'
import { Link, useNavigate , useParams, fetchProductDetails} from 'react-router-dom';

function PropertyDetails() {
  const { property_id } = useParams(); // Get the product ID from the URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
      fetchPropertyDetails();
  }, [property_id]);

  const fetchPropertyDetails = async () => {
      try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/addproperty/${property_id}`);
          setProperty(response.data.data);
      } catch (err) {
          setError('Failed to fetch property details.');
      } finally {
          setLoading(false);
      }
  };

  if (loading) {
      return <AdminLayout>Loading...</AdminLayout>;
  }

  if (error) {
      return <AdminLayout>{error}</AdminLayout>;
  }



  return (
      <AdminLayout>
          <div className="property-detail">
              <div className="container-fluid">
                  <div className="row">
                      {property && (
                          <>
                              {/* Product Images Section */}
                              <div className="col-lg-6">
                                  <div className="property-images">
                                      {property?.image?.split(',').map((src, i) => (
                                          <img
                                              key={i}
                                              src={`${process.env.REACT_APP_BACKEND_URL}/addproperty/${src}`}
                                              alt={property.productname}
                                              width="100%"
                                              style={{ marginBottom: '10px' }}
                                          />
                                      ))}
                                  </div>
                              </div>

                              {/* Product Details Section */}
                              <div className="col-lg-6">
                                  <h2>{property.property_title}</h2>
                                  <p>{property.description}</p>
                                  <p><b>Price:</b> ৳{property.price || 99}</p>

                                 <br/>

                                  {/* Add to Cart Button */}
                                  {/* <button className="btn btn-primary" onClick={handleAddToCart}>
                                      Add to Cart
                                  </button> */}
                              </div>
                          </>
                      )}
                  </div>
              </div>
          </div>


    </AdminLayout>       
  )
}

export default PropertyDetails