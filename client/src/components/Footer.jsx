import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room } from "@mui/icons-material"
import styled from "styled-components"


const Container=styled.div`
display: flex;
`
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;

`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center=styled.div`
flex:1;
padding: 20px;
`
const Title=styled.h3`
margin-bottom: 20px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right=styled.div`
flex:1;
padding: 20px;
`
const ContactItem=styled.p`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payement=styled.img`

`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Nawara Fashion.</Logo>
                <Desc>Nawara Fashion Shop</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem><Room style={{marginRight:"10px"}} /> 1st of Mai Road, Sakiet Ezzit Sfax</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +216 24 616 510</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> ksentiniasma93@gmail.com</ContactItem>
                <Payement src="https://i.ibb.co/Qfvn4z6/payement.png"/>
            </Right>
        </Container>
    )
}

export default Footer