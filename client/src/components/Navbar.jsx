import React from 'react'
import styled from "styled-components"
import {Search, ShoppingCartOutlined} from "@mui/icons-material"
import { Badge } from '@mui/material'
import {mobile} from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
height:60px;
${mobile({height:"50px"})}
`

const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`

const Left=styled.div`
flex:1;
display: flex;
align-items: center;
`

const Language=styled.div`
    cursor: pointer;
${mobile({display:"none"})}

`

const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input=styled.input`
    border: none;
${mobile({width:"50px"})}

`

const Center=styled.div`
flex:1;
text-align: center;
`

const Logo=styled.h1`
    font-weight: bold;
${mobile({fontSize:"24px"})}

`

const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent:"center"})}
`

const MenuItem=styled.div`
font-size: 14px;
cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 25px;
${mobile({fontSize:"12px",margineLeft:"10px"})}
`

const Navbar = () => {

    const quantity=useSelector(state=>state.cart.quantity)
    

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color:"gray",fontSize:16}} />
                </SearchContainer></Left>
                <Center>
                    <Logo>
                        Nawara
                    </Logo>
                </Center>
                <Right>
                    <Link to="/register">
                        <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to="/login">
                        <MenuItem>Sign In</MenuItem>
                    </Link>
                    <Link to="/cart" >
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar