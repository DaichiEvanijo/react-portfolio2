import React from 'react'
import {useState} from "react"
import Product from "./Product"
import Pagination from "./Pagination"
import SlideShow from './SlideShow'

const Shop = ({products}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchProduct, setSearchProduct] = useState('');

  
  const lastPostIndex = currentPage*postsPerPage
  const firstPostIndex = lastPostIndex-postsPerPage
  const currentPosts = filteredProducts.slice(firstPostIndex,lastPostIndex)
  
  const filteredResult = (category) => {
    const filteredList = products.filter((product) => product.category === category)  
    setFilteredProducts(filteredList)
    setCurrentPage(1)
  }

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
    setCurrentPage(1);
    const filteredList = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filteredList);
  };

  return (
    <div>
      <h2 className='title'>
        Merch
      </h2>
      <div className="slideshow">
        <SlideShow/>
      </div>
      <div className='filterandsearch container'>
        <div className='filternav'>
          <button onClick={() => filteredResult("Germany")}>Germany</button>
          <button onClick={() => filteredResult("Thailand")}>Thailand</button>
          <button onClick={() => filteredResult("Japan")}>Japan</button>
          <button onClick={() => setFilteredProducts(products)}>All</button>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Input city name" value={searchProduct} onChange={handleSearch} />
        </div>
      </div>
      <div className='productmap container'>
        {currentPosts.map(currentPost =>
          <Product currentPost={currentPost} key={currentPost.id}/>
        )}
      </div>
      <div className="pagination container">
        <Pagination totalPosts= {filteredProducts.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default Shop