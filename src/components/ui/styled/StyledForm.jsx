import {Form, Badge, CloseButton} from 'react-bootstrap';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StyledFormGroup = styled(Form.Group)`
    width : 30rem;
    margin-bottom: 0;
    &.email {
        min-width: 20rem;
        width:auto;
        max-width:30rem;
       
        @media screen and (max-width: 480px){
        width: 15rem !important;
    
    }
        
    }
    &.password{
        min-width: 20rem;
        width:auto;
        max-width:30rem;

        @media screen and (max-width: 480px){
        width: 15rem !important;
    
    }
    }
    &.textArea {
       resize: none !important;
       input{
        resize: none !important;
       }
    }
    &.payment{
    
    }
    &.file{
        width: 20rem;
    }
    &.csv{
        width: 5rem;
          @media screen and (max-width: 480px){
             width: 5rem !important;
    
    }
    }
    &.cc-expiry{
        width: 5rem;
          @media screen and (max-width: 480px){
             width: 5rem !important;
    
    }
    }

    input{
    margin-top: 0 !important;
    padding-top 0 !important;
    }

    @media screen and (max-width: 480px){
        width: 15rem !important;
    
    }

    @media screen and(max-width: 820px){
        min-width: 15rem !important;
        max-width: 20rem !important;
        width: auto !important;
    }

       @media screen and(max-width: 1200px){
        min-width: 15rem !important;
        max-width: 20rem !important;
        width: auto !important;
    }
`;

const FieldContainer = styled(Form.Label)`
    
    margin-top: 0 !important;
    padding-top 0 !important;
    
`;

const RecipientContainer = styled.div`
    display: flex;
    align-text: center;
    border: solid #bfbdbd 1px;
    border-radius: .3rem;
    
    padding: 8px;
    
    input:focus {
       box-shadow: none ;
    
    }

       label{
        padding: 0 !important;
        margin:0 !important;
    }

    

`;


const PillContainer = styled.div`
    display: flex;
    border: solid black 1px;
    border-radius:.8rem;
    margin-top: 3px;
    margin-left: 3px;
    height: 30px;
    padding: 4px;
    margin-right: 2px;
    p{
    font-size: 14px;
    color: black;
    text-align: center;
    }

    img{
        width: 10px;
        }
    .closeButton:focus{
        box-shadow: none;
        
    }
    &.hidden{
        display: none;
    }

    &.visible{
        
    }

      @media screen and (max-width: 480px){
        display: none !important;
    
    }
`;

const StyledEmailFormControl = styled(Form.Control)`
    border:none;
  
    margin-top: 0 !important;
    padding-top 0 !important;

    label{
        padding: 0 !important;
        margin:0 !important;
    }

`;

const StyledCloseButton = styled(CloseButton)`
    width: 2px ;
    margin-right: 3px;
    margin-left: 5px;
    color: #bfbdbd;
`

const StyledForm = ({label, type, text, placeholder, className, rows, as, emailList}) => {
// const emailList= ['test@mail.com', 'ffs@mail.com'];
const [inputValue, setInputValue] = useState('');
const [list,setList ]= useState(emailList);
const [disable, setDisable] = useState(false);

const removeRecipient= (mail, list) => {
  setList(list.splice(list.indexOf(mail),1)) ;
   if (list.length === 0){
    setDisable(true);
    setList([]);
   }else{
    setDisable(false);
   }
    console.log(list);
}

const saveEmailAddress = (e, list) => {
  list.push(e);
  console.log(e);

};

const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


const keyDown = (event) =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputValue.match(validRegex) && ['Enter',' ', 'Tab' ,','].includes(event.key)){
            event.preventDefault();
            list.push(inputValue);
            console.log(list);
            setDisable(false);
            setInputValue('');
        }else if (inputValue.match(!validRegex) && ['Enter',' ', 'Tab' ,','].includes(event.key)){
            alert('invalid Email');
        }
        
    
}
/*const pillItem = emailList.map((email) =>
            <PillContainer className={}>
                <p>{email} </p>
                <CloseButton  className='closeButton' onClick={(e)=> removeRecipient(email, emailList)} />
            </PillContainer>
); */
return(
    <>
        { type === 'recipient' ? 
        <Form>
             <StyledFormGroup  className={className} >
             <Form.Label>{label}</Form.Label>
                
                <RecipientContainer > 
                    { list.length > 0 ?
                       list.map(email => (
                        <PillContainer key= {list.indexOf(email)} className={disable ? 'hidden' : 'visible'}>
                            <p>{email} </p>
                            <StyledCloseButton  className='closeButton' onClick={(e)=> removeRecipient(email, list)} />
                        </PillContainer> 
                     )) : <></> }
                    <StyledEmailFormControl onKeyDown={(e)=>keyDown(e)} onChange={handleInputChange} value={inputValue} type ={type} placeholder={disable ?  placeholder : null} rows = {rows} as = {as} />
                </RecipientContainer>
             </StyledFormGroup>
        </Form> 

:

<Form>
    <StyledFormGroup  className={className} >
        
        <Form.Label>{label}</Form.Label>
        <Form.Control type ={type} placeholder={placeholder} rows = {rows} as = {as} />
       
    </StyledFormGroup>
</Form> }
    
    </>

)

}

export default StyledForm;