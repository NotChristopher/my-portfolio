import Navbar from './navbar.js'
import Background from './images/Backgroundimage.png'


const Home = () => {
    return(
        
        <div className ="Hero-txt">
            <div className ="Background-color"></div>
            <Navbar />
            <h2>Hello <br/>I'm Christopher<br/>Brummer</h2>
            <a href = "/files/mycv.pdf" target = 'blank'><button type="button" class="btn btn-primary btn-lg">VIEW MY CV</button></a>
            <img className ="Hero-img" src = {Background} alt = "Selfie"/>
            
        </div>
    )
}

export default Home;