import React, {useState, useEffect} from 'react'
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout'
import { Link, useNavigate } from 'react-router-dom';

function Properties() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    getDatas();
}, []);

const getDatas = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/property/`);
        setData(response.data.data);
    } catch (err) {
        setError("Failed to fetch products.");
    } finally {
        setLoading(false);
    }
};
  return (
    <AdminLayout>


<div className="main" data-background-color="dark">
      <div>
        
    </div>

    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6 text-center mx-auto">
            <h2 className="font-weight-bold text-primary heading">
              Featured Properties
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">


<div>

  {/* <!-- Featured Properties Section --> */}
  <section class="my-5">
    <div class="container">
    <div className="row">
                                {data.length > 0 ? (
                                    data.map((d) => (
                                        <div className="col-md-4" key={d.id}>
                                            <div className="product-item">
                                                <div className="product-title">
                                                    <a href="#">{d.productname}</a>
                                                    <div className="ratting">
                                                        {[...Array(5)].map((_, index) => (
                                                            <i key={index} className="fa fa-star"></i>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="product-image">
                                                    <a href="product-detail.html">
                                                        {d?.image?.split(',').map((src, i) => (
                                                            <img
                                                                key={i}
                                                                src={`${process.env.REACT_APP_BACKEND_URL}/addproperty/${src}`}
                                                                alt="Property"
                                                                width="100%"
                                                                height="280px"
                                                                style={{ display: i === 0 ? 'block' : 'none' }}
                                                            />
                                                        ))}
                                                    </a>
                                                    <div className="product-action">
                                                        {/* <button type='button' className="btn btn-link" onClick={() => { addItem(d) }}><i className="fa fa-cart-plus"></i></button>
                                                        <button type='button' className="btn btn-link"><i className="fa fa-heart"></i></button>
                                                        <button type='button' className="btn btn-link"><i className="fa fa-search"></i></button> */}
                                                        {/* <button onClick={() => deleteData(d.id)}><i className="fa fa-trash"></i></button> */}
                                                    </div>
                                                </div>
                                                <div className="product-price">
                                                    <h3><span>৳</span>{d.price || 99}</h3>
                                                </div>
                                                <div className="product-price">
                                                    <h3><span></span>{d.property_title}</h3>
                                                </div>
                                                <div className="row">
                                                  <div className="col-md-6">
                                                    <a to="#" className="btn btn-primary py-2 px-3"> See details </a>
                                                  </div> 
                                                  <div className="col-md-6">
                                                    <Link to="/Buyform" className="btn btn-primary py-2 px-3" > Buy Property </Link>
                                                  </div> 
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No property available</div>
                                )}
            </div> 
                         
     </div>
  </section>
 </div>
 
    <div
      id="property-nav"
      className="controls"
      tabindex="0"
      aria-label="Carousel Navigation"
    >
      <span
        className="prev"
        data-controls="prev"
        aria-controls="property"
        tabindex="-1"
        >Prev</span
      >
      <span
        className="next"
        data-controls="next"
        aria-controls="property"
        tabindex="-1"
        >Next</span
      >
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </AdminLayout>       
  )
}

export default Properties