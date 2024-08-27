import styled from 'styled-components'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from '../../assets/images/wallbg.png'

const Wrapper = styled.div`
 display: grid;
 justify-content: center;
 align-items:center;
 text-align :center;
 padding: 15rem;

 @media screen and (max-width: 1200px){
    max-width: 100vw !important;
    width: auto !important;

 }
`;

const BackgroundContainer = styled.div`
 
 background-image: url(${background});
 width: auto;
 height: 100vh;
 background-size: cover;
 image-rendering: high-quality; 
 backdrop-filter: blur(100)!important;
 
 background-repeat: no-repeat !important;

 @media screen and (max-width: 1200px){
    max-width: 100vw !important;
    width: auto !important;
    width: auto !important;
    height: 100vh !important;
 }
`;
const Title = styled.h2`
 margin-top: .6rem;
 font-size: 48px;
 color: #ffff;

  @media screen and (max-width: 1200px){
    margin-top: .6rem;
    font-size: 36px;
    color: #ffff;
 }
`;

const SubTitle = styled.h3`
font-size: 48px;
 color: #ffff;
 aling-self:center;

  @media screen and (max-width: 1200px){
    margin-top: .6rem;
    font-size: 30px;
    color: #ffff;
 }
`;

const StyledButton = styled(Button)`
 padding: 1wrem 2rem !important;
 font-size: 28px;
 color: #ffff;
 background-color: #1c6bba;
 border-radius: .8rem;
 margin-top: 2.5rem;
 :active{
    color: #fcfcfc;
    background: #134980;
 }

 
  @media screen and (max-width: 1200px){
   font-size: 22px;
 }

`;



const Home = () => {

    
    return (
        <BackgroundContainer>
        <Wrapper>
        <Title>Christopher Brummer</Title>
        <SubTitle>Web Developer</SubTitle>
        <Link to={"/timeline"} >
        <StyledButton variant = "primary" >My journey thus far</StyledButton>
        </Link>
        </Wrapper>
        </BackgroundContainer>

        )
}
export default Home;