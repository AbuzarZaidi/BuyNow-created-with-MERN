import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
const RelatedProducts = () => {
  return (
    <>
      <div className="container-fluid py-5 px-5 " style={{ width: "98%" }}>
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span class="bg-secondary pr-3">You May Also Like</span>
        </h2>
        <OwlCarousel
          className="owl-theme "
          loop
          margin={30}
          items={4}
          autoplay={true}
          autoplayTimeout={6000}
          nav
        >
          <div className="item ">
            <div class="product-item bg-light">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-1.jpg" alt="" />
                <div class="product-action">
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="far fa-heart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-sync-alt"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-search"></i>
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" to="/">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="item ">
            <div class="product-item bg-light">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-2.jpg" alt="" />
                <div class="product-action">
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="far fa-heart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-sync-alt"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-search"></i>
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" to="/">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="item ">
            <div class="product-item bg-light">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-3.jpg" alt="" />
                <div class="product-action">
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="far fa-heart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-sync-alt"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-search"></i>
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" to="/">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="item ">
            <div class="product-item bg-light">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-4.jpg" alt="" />
                <div class="product-action">
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="far fa-heart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-sync-alt"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-search"></i>
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" to="/">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="item ">
            <div class="product-item bg-light">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-5.jpg" alt="" />
                <div class="product-action">
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="far fa-heart"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-sync-alt"></i>
                  </Link>
                  <Link class="btn btn-outline-dark btn-square" to="/">
                    <i class="fa fa-search"></i>
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" to="/">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default RelatedProducts;
