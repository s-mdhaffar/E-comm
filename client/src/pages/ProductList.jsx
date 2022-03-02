import styled  from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container=styled.div`

`
const Title=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`
const Filter=styled.div`
margin: 20px;
`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
`
const Select=styled.select`
    padding: 10px;
    margin-left: 20px;
`
const Option=styled.option``

const ProductList = () => {

const location=useLocation();
const cat=location.pathname.split("/")[2];

const [filters, setFilters] = useState({})

const handleFilters=(e)=>{
    const value=e.target.value;
    setFilters({
        ...filters,[e.target.name]:value
    })
}

const [sort, setSort] = useState("newest")

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products :</FilterText>
                    <Select name='color' onChange={handleFilters} >
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Gray</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products :</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value={"Newest"} >Newest</Option>
                        <Option value={"asc"}>Price (asc)</Option>
                        <Option value={"desc"}>Price (desc) </Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList