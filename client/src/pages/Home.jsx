import React from 'react'
import Carousel from '../components/home/Carousel'
import Categories from '../components/home/Categories'
import Featured from '../components/home/Featured'
import FeaturedProdcuts from '../components/home/FeaturedProdcuts'
import RecentProducts from '../components/home/RecentProducts'
import SpecialOffer from '../components/home/SpecialOffer'
import Vendors from '../components/home/Vendors'


const Home = () => {
  return (
    <>
    <Carousel/>
    <Featured/>
    <Categories/>
    <FeaturedProdcuts/>
    <SpecialOffer/>
    <RecentProducts/>
    <Vendors/>
    </>
  )
}

export default Home