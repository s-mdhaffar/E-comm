import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import axios from 'axios'



const Container=styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button=styled.button`
    border: none;
    width: 120px;
    border-radius: 5px;
    padding: 20px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Pay = () => {
    const KEY="pk_test_51KTtbLC2NhwnuTjeksB1jw76WLjALHaxU9vSumyGEObJK8rUgfdlJf3TgEAqoTX8LKjuIDkqhDM9pA287VQd81Nh00l46H7J8F"
    
    const [stripeToken, setStripeToken] = useState(null)

    const onToken=(token)=>{
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest=async()=>{
            try {
                const res= await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount:2000
                })
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken])
    

  return (
    <Container>
        <StripeCheckout
        name='Nawara Fashion'
        image='https://cdn.dribbble.com/users/1765572/screenshots/5850365/untitled-1.jpg'
        billingAddress
        shippingAddress
        description='Your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
            <Button>
                Pay Now
            </Button>
        </StripeCheckout>
    </Container>
  )
}

export default Pay