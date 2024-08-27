import styled from 'styled-components';
import StyledForm from '../ui/styled/StyledForm';
import { Tabs, Tab, } from "react-bootstrap";

const Container = styled.div`
  height: auto !important ;
  min-height: 100vh;
  
  padding: 4rem 5rem;
  background: #383838;

  @media screen and (max-width: 480px){
    height: auto !important ;
    min-height: 100vh !important ;
    width: auto !important ;
    min-width: 100vw !important ;
    padding: 2rem 2rem;
    background: #383838 !important ;
  }

  @media screen and (max-width: 720px){
        height: auto !important ;
        min-height: 100vh !important ;
        width: auto !important ;
        min-width: 100vw !important ;
        padding: 2rem 2rem;
        background: #383838 !important ;
    }

      @media screen and (max-width: 1200px){
        height: auto !important ;
        min-height: 100vh !important ;
        width: auto !important ;
        min-width: 100vw !important ;
        padding: 2rem 2rem;
        background: #383838 !important ;
    }

  
`;

const StyledTab = styled(Tab)`
    text-decoration: none;
    color: white;
    font-size: 24px;
    a {
      text-decoration: none;
      color: white;
       font-size: 24px;
    }
    h2{
    text-decoration: none;
      color: white;
       font-size: 24px;
    }
`;

const DashedLine = styled.hr`
  border: none;
  height: 1px;
  background: #FFFFFF;
  background: repeating-linear-gradient(90deg,#FFFFFF,#FFFFFF 6px,transparent 6px,transparent 12px);
  margin-bottom: .75rem;
`;

const VerticalLine = styled.hr`
  border: none;
  height: 1px;
  background: #FFFFFF;
  background: repeating-linear-gradient(45deg,#FFFFFF,#FFFFFF 6px,transparent 6px,transparent 12px);
  margin-bottom: .75rem;
  margin-left: .5rem;
  margin-right:.5rem;
`;

const Header = styled.h2`
 color : #ededed;

`;

const HeaderWrapper = styled.div`

`;

const EmailContainer = styled.div`
  background : #FFFF;
  padding:.2rem;
`

const Subtext = styled.h4`
  color: #ededed;

`
const Wrapper = styled.div`
  display: flexbox;
  justify-content: center;
  color: #ededed;
`

const Cols = styled.div`
  display: flex;
  cols: 2;
  justify-content: space-between;
  @media screen and (max-width: 720px){
    cols: 1;
    display: flexbox;
  }
    

  @media screen and (max-width: 1200px){
    cols: 1 !important;
    display: table !important;
  }

`;


const InputFields = () => {

  const emailList = ['test@mail.com', 'example@mail.com'];
  return (
  <Container>
    <HeaderWrapper>
      <Header>
        Text Inputs
      </Header>\
      <Subtext>
        Example of a styleguide for text inputs in their natural habitat. Play around they don't bite ; )
      </Subtext>
    </HeaderWrapper>
    
   <DashedLine />
    <Wrapper>
      <Subtext>
        Login Example
      </Subtext>
      <StyledForm className={"email"} type = {"email"} label ={"Email"} placeholder ={"example@email.com"} />
      <StyledForm className={"password"} type = {"password"} label ={"password"} placeholder ={"password"} />
   </Wrapper>
   
   <DashedLine />
  <Cols>
  <Wrapper>
      <Subtext>
        Card Payments
      </Subtext>
      <StyledForm className={"cardholder-name"} type = {"cardholder-name"} label ={"cardholder name"} placeholder ={"cardholder name"} />
      <StyledForm className={"shipping address"} type = {"shipping address"} label ={"shipping address"} placeholder ={"shipping address"} />
      <StyledForm className={"payment"} type = {"payment"} label ={"payment"} placeholder ={"card number"} />
      <Cols>
      <StyledForm className={"csv"} type = {"csv"} label ={"csv"} placeholder ={"csv"} />
      <StyledForm className={"cc-expiry"} type = {"cc-expiry"} label ={"cc-expiry"} placeholder ={"cc-expiry"} />
      </Cols>
   </Wrapper>
  <VerticalLine />
  <Wrapper>
      <Subtext>
        Email Example
      </Subtext>
      <EmailContainer>
      <StyledForm className={"email"} type = {"recipient"} placeholder ={'Recipient'} emailList={emailList}/>
      <StyledForm className={"text-area"} type = {"text-area"} placeholder ={"Subject"} />
      <StyledForm  type = {"textarea"}  placeholder ={""} rows={5}  as ={"textarea"} />
      </EmailContainer>
   </Wrapper>
   </Cols>
  
   <DashedLine />
   
  
  </ Container>
  )
}
export default InputFields;
