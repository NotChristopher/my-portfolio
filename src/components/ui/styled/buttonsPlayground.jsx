import {Button, ButtonGroup, ToggleButton, CloseButton, Modal,} from "react-bootstrap";
import styled from "styled-components";
import { useState} from "react";


const StyledButton = styled(Button)`
    
    background-color: red;
    color: white;
    text-decoration: none;
    padding: .5rem 5rem  .5rem 5rem !important;
    border-radius: .4rem;

`;

const PartyButton = styled(Button)`
    background-color:d94646;
    color: white;
    padding: .5rem 5rem  .5rem 5rem !important;
    width: max-content;
    border-radius: .4rem;
    margin-right:2rem;
    margin-left:2rem;

   
`;

const OutlineButton = styled(Button)`

`;

const TransitionButton = styled(Button)`
    
    padding: .5rem 5rem  .5rem 5rem !important;
    border-radius: .4rem;
    
`;

const Wrapper = styled.div`
 display: flex;
 justify-content: space-between;
.partymode {
    animation-name: colorchange;
    animation-duration: 11s;
    animation-delay: 0s;
    animation-iteration-count: infinite;

    @keyframes colorchange{
        0%{background-color: #f4e749;
            color: #60bbf4;
        }
        10%{background-color: #60bbf4;
            color: #bcef32;
        }
        20%{background-color: aqua;
            color: #bc3bbc;
        }
        30%{background-color: #7d42dd;
            color: #e5903a;
        }
        40%{background-color: #e5903a;
            color: #aqua;
        }
        50%{background-color: #a58828;
            color: #f4e749;
        }
        60%{background-color: #bc3bbc;
            color: #7d42dd;
        }
        70%{background-color: #164a16;
            color: #b96c52;
        }
        80%{background-color: #d94646;
            color: #bc3bbc;
        }
        90%{background-color: #b96c52;
            color: #a58828;
        }
        100%{background-color: #bcef32;
            color: #d94646;
        }   
}

}

`;
const ButtonPlayground = () => {

    

    const [className, setClassName] = useState('');
    const [party, setParty]= useState(false);
    

    const transition = () => {

    }

   
    const partyMode = () => {
        setParty(!party)
        if (party){
            setClassName('partymode');
        } else {
            setClassName(null);
        }
        

        
       
    }
    return(
        <Wrapper>
        <StyledButton>Primary Button</StyledButton>
        <PartyButton onClick={partyMode} className={className}>Party Button</PartyButton>
        <TransitionButton className = "primary-outline">Let's move on</TransitionButton>
        </Wrapper>
    )
}

export default ButtonPlayground;