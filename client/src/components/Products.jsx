import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container=styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,filters,sort}) => {

  const [products, setProducts] = useState([])
  const [filtredProducts, setFiltredProducts] = useState([])

  useEffect(() => {
    const getProducts= async ()=>{
      try {
        const res = await axios.get(cat?`http://localhost:5000/api/products?category=${cat}`:"http://localhost:5000/api/products/")
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [cat])

  useEffect(() =>{
    if(sort==="Newest"){
      setFiltredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt - b.createdAt))
    }else if(sort==="asc"){
      setFiltredProducts((prev)=>[...prev].sort((a,b)=>a.price - b.price))
    }else{
      setFiltredProducts((prev)=>[...prev].sort((a,b)=>b.price - a.price))
    }
  },[sort])

  useEffect(() => {
    cat && setFiltredProducts(
      products.filter((item)=>
      Object.entries(filters).every(([key,value])=>
      item[key].includes(value))
      )
    )
  }, [cat,products,filters])
  
  

  return (
    <Container>
        {cat
        ?filtredProducts.map(item=>(
            <Product key={item._id} item={item}/>
        ))
        :products.slice(0,8).map(item=>(
          <Product key={item._id} item={item}/>
      ))
        }
    </Container>
  )
}

export default Products