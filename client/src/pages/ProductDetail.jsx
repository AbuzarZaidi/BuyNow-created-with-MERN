import React,{useState} from 'react'
import { HashLink as Link } from "react-router-hash-link";
// import {  Link} from "react-router-dom";
import Description from '../components/productDetail.jsx/Description';
import Information from '../components/productDetail.jsx/Information'
import Review from '../components/productDetail.jsx/Review'
import { useSelector } from "react-redux";
import RelatedProducts from '../components/productDetail.jsx/RelatedProducts';
const ProductDetail = () => {
    const product = useSelector((state) => state.productData.product);
const [showTab,setShowTab]=useState(0)

  return (
 <>
 {/* <!-- Breadcrumb Start --> */}
 <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                    <Link className="breadcrumb-item text-dark" to="/">Shop</Link>
                    <span className="breadcrumb-item active">Shop Detail</span>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}
    {/* <!-- Shop Detail Start --> */}
    <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light">
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src={product.imgUrl} alt="Img"/>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-2.jpg" alt="Img"/>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-3.jpg" alt="Img"/>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-4.jpg" alt="Img"/>
                        </div>
                    </div>
                    <Link className="carousel-control-prev"  to="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </Link>
                    <Link className="carousel-control-next" to="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </Link>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>{product.name}</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">(99 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">${product.price}</h3>
                    <p className="mb-4">{product.description}</p>
                    <div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Sizes:</strong>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-1" name="size"/>
                                <label className="custom-control-label" htmlFor="size-1">XS</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-2" name="size"/>
                                <label className="custom-control-label" htmlFor="size-2">S</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-3" name="size"/>
                                <label className="custom-control-label" htmlFor="size-3">M</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-4" name="size"/>
                                <label className="custom-control-label" htmlFor="size-4">L</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-5" name="size"/>
                                <label className="custom-control-label" htmlFor="size-5">XL</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <strong className="text-dark mr-3">Colors:</strong>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-1" name="color"/>
                                <label className="custom-control-label" htmlFor="color-1">Black</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-2" name="color"/>
                                <label className="custom-control-label" htmlFor="color-2">White</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-3" name="color"/>
                                <label className="custom-control-label" htmlFor="color-3">Red</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-4" name="color"/>
                                <label className="custom-control-label" htmlFor="color-4">Blue</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-5" name="color"/>
                                <label className="custom-control-label" htmlFor="color-5">Green</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{width: "130px"}}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary border-0 text-center" defaultValue="1"/>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button>
                    </div>
                    <div className="d-flex pt-2">
                        <strong className="text-dark mr-2">Share on:</strong>
                        <div className="d-inline-flex">
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-pinterest"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                         <Link className="nav-item nav-link text-dark active" data-toggle="tab" 
                        to="/detail#tab-pane-1" onClick={()=>setShowTab(0)}>Description</Link> 
                           <Link className="nav-item nav-link text-dark " data-toggle="tab" 
                        to="/detail#tab-pane-2"onClick={()=>setShowTab(1)}>Information</Link> 
                           <Link className="nav-item nav-link text-dark " data-toggle="tab" 
                        to="/detail#tab-pane-3"onClick={()=>setShowTab(2)}>Review</Link> 
                         
                    </div>
                    <div className="tab-content">
                    {showTab===0&&<Description detail={product.longDescription}/>}
                    {showTab===1&&<Information/>}
                    {showTab===2&& <Review/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Shop Detail End --> */}
    <RelatedProducts/>

    </>

  )
}

export default ProductDetail