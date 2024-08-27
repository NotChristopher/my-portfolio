import styled from "styled-components";
import { Tabs, Tab, Modal, Button, } from "react-bootstrap";
import { useState, useEffect } from "react";
import { mail } from "../../mock/mails";
import Layout from "../layout/Layout";
import Row from '../ui/styled/Row';
import StyledPagination from "../ui/styled/Pagination";
import { inbox } from "fontawesome";


const Header = styled.div`
display: inline-flexbox;
`;

const SideBar = styled.div`
    width: 20rem;
    height: 100vh;
    background-color:black;
`;
const Inbox = styled.div`

`;

const Container = styled.div`
    display : flex;
`;

const Title = styled.h2`

`

const PaginationContainer= styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: center;
`;
const CMail = () => {
    


    const [inboxArray, setInboxArray] = useState([]);
    const [socailArray, setSocialArray] = useState([]);
    const [promoArray, setPromoArray] = useState([]);
    const [paginationSize, setPaginationSize] = useState([]);
    const [payLoad, setPayLoad]= useState([]);
    const paginationCalculator = (mails) => {
       let items = mails;
       while(items.length) {
         let pages =  items.splice(0,10);
         setPaginationSize(pages.length);
         setPayLoad(pages);
       }
    };

    useEffect(() => {
        
    const inbox = [];
    const social =[];
    const promotional = [];
        if(mail){
            mail.forEach(mail => {
                if (mail.boxDesignation === 'inbox'){
                    inbox.push(mail);
                    setInboxArray(inbox);
                    
                } else if (mail.boxDesignation === 'social'){
                    social.push(mail)
                    setSocialArray(social);
                }else if (mail.boxDesignation === 'promotional'){
                    promotional.push(mail)
                    setPromoArray(promotional);
                } else {
                    return null;
                }
            });
            
        }
    }, []);
    return (
            <>
                    <Tabs
                        defaultActiveKey="Inbox"
                        id="uncontrolled-tab"
                        className="mb-3"
                    >
                        <Tab eventKey="Inbox" title="Inbox">
                            {inboxArray.length > 0 ? inboxArray.map(item => 
                                <Row name ={item.name} subject = {item.subject} paragraph={item.paragraph} date = {item.date}/>)
                            : <>
                                <h2>Alot of empty</h2>
                            </> 
                            }
                            
                        </Tab>
                        <Tab eventKey="Social" title="Social">
                        {socailArray.map(item => 
                                <Row name ={item.name} subject = {item.subject} paragraph={item.paragraph} />)}
                                
                        </Tab>
                        <Tab eventKey="Promotional" title="Promotional" >
                        {promoArray.map(item => 
                                <Row name ={item.name} subject = {item.subject} paragraph={item.paragraph} />)}
                                
                        </Tab>
                    </Tabs>
            </>
    )
}

export default CMail;