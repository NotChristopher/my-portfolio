import styled from "styled-components";
import {Modal, Button} from 'react-bootstrap';
import {useState} from 'react';
import Composer from './styled/Composer';


const ListContainer = styled.ul`
    list-style: none;
    padding: 1rem;
    width: 12rem;
    text-align: center;
    letter-spacing: 3px;
    line-height: 2rem;
    li:hover{
        background: #d7effc;
        border-radius: .8rem;
    }
`;

const ListItem = styled.li`
    font-size: 24px;
    weight: 300;
    padding: 1rem;
    margin-top: .5rem;
    border: 1px black;
    border-style: none none solid none ;
    
`;


const ComposeButton = styled(Button)`
    margin-left: 3rem;
`;

const MailSideBar = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);
    return(
        <>
                    <ListContainer>
                        <ListItem>Inbox</ListItem>
                        <ListItem>Sent</ListItem>
                        <ListItem>Spam</ListItem>
                        <ListItem>Archived</ListItem>
                    </ListContainer>

                    
        
        <ComposeButton onClick={handleShow}>Compose</ComposeButton>
                    <Composer show = {show} />
        </>
    )
}

export default MailSideBar;