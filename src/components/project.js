import projectimg from './images/projectimg.png'
import projectimg2 from './images/projectimg2.png'
import projectimg3 from './images/projectimg3.png'

const Projects = () => {
    return(
        <div className = "Project-container">
            <h2>Projects</h2>
            <div className ="Project-1">
                <img className = "Image-project" src = {projectimg} alt ='project thumbnail' />
                <div className = "text-container">
                    <h2>Architect Website</h2>
                    <p>This is a responsive Architect Website I made. View the source code on my <a href ="https://github.com/NotChristopher/Architect-Website" target ='blank'>Github</a></p>
                    
                    
                </div>
            </div>

            <div className ="Project-2">
                <img className = "Image-project2" src = {projectimg2} alt ='project thumbnail2' />
                <div className = "text-container2">
                    <h2>Dice Game</h2> 
                    <p>A game I made using JavaScript. It is basic but served as a good project to level up my DOM skills with JavaScript. View the souce code on my <a href = "https://github.com/NotChristopher/dice-game " target ="blank" >Github</a></p>
                    
                    
                </div>
            </div>

            <div className ="Project-3">
                <img className = "Image-project3" src = {projectimg3} alt ='project thumbnail3' />
                <div className = "text-container3">
                    <h2>Movie ReactJS App</h2> 
                    <p>This is a ReactJS app I build using TMDB.org API to show selected movie details, search movies from the api and on the home page it also shows you the current
                        week's trending movies. Check out the source code on my <a href="https://github.com/NotChristopher/movie-project" target ="blank">Github.</a></p>
                    
                    
                </div>
            </div>
            
            
            {/* This is a saveholder for a future project
            <div className ="Project-4">
                <img className = "Image-project4" src = {projectimg2} alt ='project thumbnail4' />
                <div className = "text-container4">
                    <h2> Project 4</h2> 
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is crisp in view. </p>
                    
                    
                </div>
            </div>
            */}
            

        </div>
    )
}

export default Projects;