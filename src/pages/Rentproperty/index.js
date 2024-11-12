import React, {useState, useEffect} from 'react'
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout'
import { Link, useNavigate } from 'react-router-dom';

function Rentproperty() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    getDatas();
}, []);

const getDatas = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?listing_type=rent`);
        setData(response.data.data);
    } catch (err) {
        setError("Failed to fetch property.");
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
                                        <div className="col-md-4" style={{paddingTop:"20px"}} key={d.id}>
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
                                                    <Link to="/Buyform" className="btn btn-primary py-2 px-3" > Rent Property </Link>
                                                  </div> 
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No products available</div>
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

    {/* <div className="section section-properties">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_1.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
           
           

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_2.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a href="property-single.html" className="btn btn-primary py-2 px-3">See details </a>

                </div>
              </div>
            </div>
           
           

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_3.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
           
           

          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_4.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
          
          

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_5.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
          
          

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_6.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
          
          

          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_7.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
           
           

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_8.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
           
           

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div className="property-item mb-30">
              <a href="property-single.html" className="img">
                <img src="assets/images/img_1.jpg" alt="Image" className="img-fluid" />
              </a>

              <div className="property-content">
                <div className="price mb-2"><span>$1,291,000</span></div>
                <div>
                  <span className="d-block mb-2 text-black-50"
                    >5232 California Fake, Ave. 21BC</span
                  >
                  <span className="city d-block mb-3">California, USA</span>

                  <div className="specs d-flex mb-4">
                    <span className="d-block d-flex align-items-center me-3">
                      <span className="icon-bed me-2"></span>
                      <span className="caption">2 beds</span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span className="icon-bath me-2"></span>
                      <span className="caption">2 baths</span>
                    </span>
                  </div>

                  <a
                    href="property-single.html"
                    className="btn btn-primary py-2 px-3"
                    >See details</a
                  >
                </div>
              </div>
            </div>
            


          </div>
        </div>
        <div className="row align-items-center py-5">
          <div className="col-lg-3">Pagination (1 of 10)</div>
          <div className="col-lg-6 text-center">
            <div className="custom-pagination">
              <a href="#">1</a>
              <a href="#" className="active">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </div>
          </div>
        </div>
      </div>
    </div> */}


    </AdminLayout>       
  )
}

export default Rentproperty