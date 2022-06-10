import { Add, Remove } from "@mui/icons-material"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"


const KEY="pk_test_51KTtbLC2NhwnuTjeksB1jw76WLjALHaxU9vSumyGEObJK8rUgfdlJf3TgEAqoTX8LKjuIDkqhDM9pA287VQd81Nh00l46H7J8F"


const Container=styled.div``
const Wrapper=styled.div`
padding: 20px;
`
const Title=styled.h1`
font-weight: 300;
text-align: center;
`
const Top=styled.div`
display: flex;align-items: center;justify-content: space-between;padding: 20px;
`
const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props=>props.type==="filled" && "none"};
background-color:${props=>props.type==="filled"?"black":"transparent"};
color:${props=>props.type==="filled" && "white"};
`
const TopTexts=styled.div`

`
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom=styled.div`
display: flex;justify-content: space-between;
`
const Info=styled.div`
flex:3;
`

const Product=styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail=styled.div`
flex:2;
display: flex;
`
const Image=styled.img`
width: 200px;
`
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName=styled.span`

`
const ProductId=styled.span`

`
const ProductColor=styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize=styled.span`

`
const PriceDetail=styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;
`
const Hr=styled.hr`
margin: 10px 0px;
background-color: #eee;
border:none;
height: 1px;
`
const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
padding: 20px;
height: 50vh;
`
const SummaryTitle=styled.h1`
font-weight: 200;
`
const SummaryItem=styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="Total" && "500"};
font-size: ${props=>props.type==="Total" && "24px"};
`
const SummaryItemText=styled.span`

`
const SummaryItemPrice=styled.span`

`
const Button=styled.button`
width: 100%;
padding: 10px;
background-color: black;
color:white;
font-weight: 600;
`

const Cart = () => {
 

    const cart=useSelector(state=>state.cart)

    const [stripeToken, setStripeToken] = useState(null)

    const history=useHistory()

    const onToken=(token)=>{
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest=async()=>{
            try {
                const res= await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount:cart.total*100
                })
                history.push("/success",{data:res.data,products:cart})
            } catch (error) {
                console.log(error)
            }
        };
        stripeToken && cart.total>=1 && makeRequest()
    }, [stripeToken,cart,history])

    console.log(stripeToken)

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to="/">
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wichlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled" >CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product)=>(
                            <Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product :</b> {product.title} </ProductName>
                                    <ProductId><b>Id :</b> {product._id} </ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>Size :</b> {product.size} </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity} </ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))
                }
                <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$-5.9</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="Total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
        name='Nawara Fashion'
        image='https://cdn.dribbble.com/users/1765572/screenshots/5850365/untitled-1.jpg'
        billingAddress
        shippingAddress
        description={`Your total is $${cart.total}`}
        amount={cart.total*100}
        token={onToken}
        stripeKey={KEY}
        >
            <Button>
                Pay Now
            </Button>
        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart