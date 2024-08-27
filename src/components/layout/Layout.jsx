import styled from "styled-components";
import MailSideBar from "../ui/MailSideBar";
import { Outlet } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const Header = styled.div`
display: flex;
padding-top: 1rem;
`;

const SideBar = styled.div`
    width: 20rem;
    height: 100vh;
    margin-left:2rem !important;
`;
const Inbox = styled.div`
    width: auto;
`;

const Container = styled.div`
    display : flex;
`;

const Title = styled.h2`
    justify-content: start;
    margin-left:5rem !important;
`;

const Wrapper = styled.div`
background-color:#a1a7b3;
`;

const SearchContainer = styled.div`
    display: flex;
    padding-right: 10rem;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;

    .placeholder{
        text-align: center;
    }
`;  

const StyledForm = styled(Form)`
    width: 50rem;
`;
const Layout = ({Children}) => {
    return (
        <>
                <Header>
                <Title>
                    CMAIL
                </Title>
                <SearchContainer>
                <StyledForm.Control type="text" placeholder="Search bar" />
                </SearchContainer>
                </Header>
                <Container>
                    <SideBar>
                    <MailSideBar />
                    </SideBar>
            <Inbox>
                <Outlet/>
                </Inbox>
                </Container>
        </>
    )
}

export default Layout;