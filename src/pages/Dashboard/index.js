import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {

  return (
    <AdminLayout>


<div className="main" data-background-color="dark">
      <div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 text-center">
            <h1 className="heading" data-aos="fade-up">
              Easiest way to find your dream home
            </h1>
            <form
              action="#"
              className="narrow-w form-search d-flex align-items-stretch mb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type="text"
                className="form-control px-4"
                placeholder="Your ZIP code or City. e.g. New York"
              />
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading">
              Popular Properties
            </h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p>
              <a
                href="#"
                target="_blank"
                className="btn btn-primary text-white py-3 px-4"
                >View all properties</a
              >
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="property-slider-wrap">
              <div className="property-slider">

              <div className="row">
                
              <div className="property-item col-3">
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
              

                <div className="property-item col-3">
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

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
             

                <div className="property-item col-3">
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
              

                <div className="property-item col-3">
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

  

    <div className="section section-4 bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-5">
            <h2 className="font-weight-bold heading text-primary mb-4">
              Let's find home that's perfect for you
            </h2>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim pariatur similique debitis vel nisi qui reprehenderit.
            </p>
          </div>
        </div>
        <div className="row justify-content-between mb-5">
          <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
            <div className="img-about dots">
              <img src="assets/images/hero_bg_3.jpg" alt="Image" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex feature-h">
              <span className="wrap-icon me-3">
                <span className="icon-home2"></span>
              </span>
              <div className="feature-text">
                <h3 className="heading">2M Properties</h3>
                <p className="text-black-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>

            <div className="d-flex feature-h">
              <span className="wrap-icon me-3">
                <span className="icon-person"></span>
              </span>
              <div className="feature-text">
                <h3 className="heading">Top Rated Agents</h3>
                <p className="text-black-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>

            <div className="d-flex feature-h">
              <span className="wrap-icon me-3">
                <span className="icon-security"></span>
              </span>
              <div className="feature-text">
                <h3 className="heading">Legit Properties</h3>
                <p className="text-black-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row section-counter mt-5">
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">3298</span></span
              >
              <span className="caption text-black-50"># of Buy Properties</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">2181</span></span
              >
              <span className="caption text-black-50"># of Sell Properties</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">9316</span></span
              >
              <span className="caption text-black-50"># of All Properties</span>
            </div>
          </div>
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="counter-wrap mb-5 mb-lg-0">
              <span className="number"
                ><span className="countup text-primary">7191</span></span
              >
              <span className="caption text-black-50"># of Agents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </AdminLayout>       
  )
}

export default Dashboard