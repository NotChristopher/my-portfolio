import styled from "styled-components";
import {useEffect, useState} from "react"
import { mail } from "../../../mock/mails";
import StyledForm from '../../ui/styled/StyledForm';

const Container = styled.div`
    display: flexbox;
    position:absolute;
    margin-top:2rem;
    margin-left: 40%;
    margin-right: 1rem;
    justify-self: end;
    border: 2px black;
    z-index: 10 !important;
    border-style: solid;
    background-color: #ffff;
    &.hiden{
        display: none;
    }
    &.show{
        visibility: visible;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    border: 1px black;
    border-style: none none solid none;
`

const RecepientBox = styled.div`

`;

const MessageBox = styled.input`
    width: 25rem;
    height: 25rem;
    top:0;
`;

const MessageContainer = styled.div`
    margin: 0;
`

const SubjectLine = styled.div`
    margin-top: -5px;
`;


const Composer = ({show}) => {
    const [recepientBox, setRecepientBox] = useState([]);
    const [message, setMessage] = useState();
    const input = 'enter';
    const emailList = [];
   
    const recepientHandler = (e) => {
        var recepient =[];
        e.preventDefault();
        let value = e.target.value
        recepient.push(value);
        setRecepientBox(recepient);
        console.log(recepientBox);
    }

    return(
        <Container className={show ? 'show' : 'hiden'}>
            <RecepientBox>
                 <StyledForm className={"email"} type = {"recipient"} placeholder ={'Recipient'} emailList={emailList}/>
           </RecepientBox>
           <SubjectLine>
                <StyledForm className={"text-area"} type = {"text-area"} placeholder ={"Subject"} />
            </SubjectLine>
            <MessageContainer>
                    <StyledForm  type = {"textarea"}  placeholder ={""} rows={5}  as ={"textarea"} />
            </MessageContainer>
        </Container>
    )
}

export default Composer;