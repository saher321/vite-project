import React from 'react'
import Product from './Product'
import { products } from '../data/products'

const Home = () => {

  return (
    <div>
        <Product products={products}  />
  {/* <h1 className='text-center'>this is the age of person    {person.age}</h1>
  <h2 className='text-center'>this is the name of person    {name}</h2> */}
    </div>
  )
}

export default Home