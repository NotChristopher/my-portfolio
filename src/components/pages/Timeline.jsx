import styled from "styled-components";
import Slots from '../../assets/images/slots.png';
import Movies from '../../assets/images/movies.png';
import {Card} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    background-color: #000414;
   
@media only screen and (max-width: 600px) {
    display: flex;
    max-width: 100vw !important;
    height: max-content;
    background-color: #000414; 
  }

    
  @media screen and (max-width: 1200px){
    max-width: 100vw !important;
    height: max-content;
    background-color: #000414;
 }
`;

const Container = styled.div`
    display: grid;
    &:before {
        content: '';
        position: fixed;
        top:0px;
        justify-self: center;
        bottom:0px;
        transform:translateX(-50%);
        width:.5rem;
        background-color:#fff;
      }

 @media screen and (max-width: 480px){
        display: flex;
    &:before {
    
        content: ''!important;
        position: fixed !important;
        top:0px !important;
        justify-self: center !important;
        bottom:0px !important;
        transform:translateX(-50%) !important;
        width:.5rem !important;
        background-color:#fff !important;
      }
 }
    
  @media screen and (max-width: 1200px){
    display: grid;
    &:before {
        content: '' !important;
        position: fixed !important;
        top:0px !important;
        justify-self: center !important;
        bottom:0px !important; 
        transform:translateX(-50%) !important;
        width:.5rem !important;
        background-color:#fff !important;
      }
 }
`;

const SegwayCard = styled(Card)`
display: grid;
margin-top: 10rem;
justify-self: center;
width: 25rem;
margin-bottom: 5rem;
  background-color : white;
  color: #080a30;
  line-height: 2rem;
  text-align: center;

`;


const Entry = styled.div`
display: grid;
&:before {
    content: '';
    margin-top: 10rem;
    width:3rem;
    height:3rem;
    border:4px solid #ffffff;
    justify-self: center;
    background-color:#1D1D1D;
    border-radius:100%;
    transform:translateY(-48%);
    z-index:1000;
  }
`;

const LeftEntrance = styled.div`
  display: grid;
  margin-left: 15rem;
  &:before {
    justify-self: center;
  }

  @media only screen and (max-width: 600px) {
    justify-self: start;
    margin-left:0 !important;
  }
`;

const EntryCard = styled(Card)`
  width: 25rem;
  background-color : white;
  color: #080a30;
  line-height: 2rem;
  a{
  text-decoration: none;
  }
`

const RightEntrance = styled.div`
    justify-self: end;
    margin-right: 15rem;

 @media only screen and (max-width: 600px) {
    justify-self: center;
    margin-left:0;
  }
`;
const Timeline = () => {

    return (
        <Wrapper>
            <Container>
                <Entry>
                    <LeftEntrance>
                        <EntryCard>
                            <EntryCard.Img variant = "top" src ={Slots}/>
                            <EntryCard.Body>
                                <EntryCard.Title>Slots Game</EntryCard.Title>
                                <EntryCard.Text>One of my first projects using the power of javascript to practise my luck in slots</EntryCard.Text>
                                <p> <a href="https://slots-game.vercel.app/">Go to Slots</a>  <a href="https://github.com/NotChristopher/slots-game">Got to Github</a></p>
                            </EntryCard.Body>
                        </EntryCard>
                    </LeftEntrance>
                </Entry>
                
                <Entry>
                <RightEntrance>
                        <EntryCard>
                            <EntryCard.Img variant = "top" src ={Movies}/>
                            <EntryCard.Body>
                                <EntryCard.Title>Movie App</EntryCard.Title>
                                <EntryCard.Text>Another project to practise my react skills, more specifically my ablility to do API calls and display the data</EntryCard.Text>
                               <p><a href="https://movie-project-rosy.vercel.app/">Go to movie app</a>   <a href="https://github.com/NotChristopher/movie-project">Go to Github</a></p> 
                            </EntryCard.Body>
                        </EntryCard>
                    </RightEntrance>

                </Entry>

                <Entry>

                <LeftEntrance>
                        <EntryCard>
                            <EntryCard.Body>
                                <EntryCard.Title>Apr '22</EntryCard.Title>
                                <EntryCard.Text>My first job as a contractor working as a Frontend developer. Mainly working with react. 
                                    These first months was focused on getting up to speed with the code base of the existing CRM project we were working on doing little maintenace tickets and overall getting up to speed with the rest of the development team
                                </EntryCard.Text>
                            </EntryCard.Body>
                        </EntryCard>
                    </LeftEntrance>
                    
                </Entry>

                
                <Entry>
                 <RightEntrance>
                        <EntryCard>
                            <EntryCard.Body>
                                <EntryCard.Title>Tests</EntryCard.Title>
                                <EntryCard.Text>With the code base growing each and every day and old components being vulnerable to breaking changes I took on the challenge of writing simple snapshot tests to ensure there aren't any page breaks or components not loading or unintentionally altered but new commits.
                                                This was a whole new world for me. My previous testing experience was for a code test for a nodeJS dev role so to say I was a bit out of depth was an understatement. Nevertheless I pushed through and ended up writing over 120 tests and setting up the CI pipeline for the project.

                                </EntryCard.Text>
                            </EntryCard.Body>
                        </EntryCard>
                    </RightEntrance>
                </Entry>

                <Entry>
                 <LeftEntrance>
                        <EntryCard>
                            <EntryCard.Body>
                                <EntryCard.Title>Code Sample</EntryCard.Title>
                                <EntryCard.Text>Here is a lovely example of a styleguide page for form inputs across an app</EntryCard.Text>
                                
                                <a href="https://github.com/NotChristopher/my-portfolio/blob/main/src/components/pages/InputFields.jsx">Got to Github</a>  <a href="/inputs">Go to Example</a>
                            </EntryCard.Body>
                        </EntryCard>
                    </LeftEntrance>
                </Entry>

                <Entry>
                <RightEntrance>
                        <EntryCard>
                            <EntryCard.Body>
                                <EntryCard.Title>March '23</EntryCard.Title>
                                <EntryCard.Text>I got my contract changed to being a fulltime team member working in a hybrid role. I was working as the PM and FE developer of the team. I learned a lot the past year and even more this year. Though at times my dev role was minimized as I was responsible for planning new features and doing countless catch ups with the client over the next year.
                                </EntryCard.Text>
                            </EntryCard.Body>
                        </EntryCard>
                    </RightEntrance>
                </Entry>

                <Entry>
                <LeftEntrance>
                        <EntryCard>
                            <EntryCard.Body>
                                <EntryCard.Title>Feature Example</EntryCard.Title>
                                <EntryCard.Text>Due to NDA and using a company provided Gitlab account I don't have the exact code samples of work I did. In this example I hope to convey some of the skills I picked up along the way. This is a simple page of a CRM dashboard.Example  components are present. This is an example trying to convey the knowledge and skills I built over the last 2 years.
                                </EntryCard.Text>
                                <a href="/dashboard">Go to Example</a>
                            </EntryCard.Body>
                        </EntryCard>
                    </LeftEntrance>
                </Entry>
            
            <SegwayCard>

            
              <SegwayCard.Body>
                <SegwayCard.Title>
                    What's Next ?
                </SegwayCard.Title>   
                <SegwayCard.Text>
                I want to realign my career with my goals to become a software engineer. I have 2+ years experience in frontend development and I am looking for a role to take me to a new level. I would also like the opportunity to grow my skills to learn more about backend development. My goals are to become a full stack engineer in the next 5 to 10 years and learn more about system architecture. I have come across a real example where a competent system architect could have helped in a previous project's Backend infrastructure. We had problems with query speed due to unnecessary nesting of fields that should've been in the top level because they are displayed in most first level UI elements.
                Feel free to take a look at the Code Samples and to contact me at chrisbrummer123@gmail.com if you believe I would be a good fit at your company.

                </SegwayCard.Text>
            </SegwayCard.Body>  

            </SegwayCard>
                

            </Container>
        </Wrapper>
    )
}

export default Timeline;