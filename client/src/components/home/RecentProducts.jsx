import React from 'react'
import {  Link } from "react-router-dom";
const RecentProducts = () => {
  return (
    <>
    {/* <!-- Products Start --> */}
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-2.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-3.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-4.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-5.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-6.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-7.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="img/product-8.jpg" alt="recentProduct"/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to="/"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="/">Product Name Goes Here</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Products End --> */}
    </>
  )
}

export default RecentProducts