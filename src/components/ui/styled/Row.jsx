import styled from 'styled-components';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    display: flex;
    width: 70vw;
    border: 1px black;
    border-style: none none solid none ;
    padding: 1rem;
    border-radius: .5rem;
    align-item: center;
    justify-content: space-between;
    margin-botom: 2rem;
    box-shadow: 2px black;
`;


const IconContainer = styled.img`

`

const Name = styled.p`
    margin-right: .2rem;
`

const Subject = styled.p`

`

const Paragraph = styled.p`

`

const StyledInput = styled.input`

`
const Row = ({name, subject, paragraph, date}) => {

    return(
        <Container>
            <StyledInput type='checkbox' />
            <FontAwesomeIcon src ={faStar}/>
            <Name>{name}</Name>
            <Subject>{subject}</Subject>
            <Paragraph>{paragraph}</Paragraph>
            <p>{date}</p>
        </Container>
    )
}

export default Row;