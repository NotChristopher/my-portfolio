import about from './images/Aboutimg.png';
import Info from './images/Info Card.png';

const About = () =>{
    return(
        <div className="About">
            <h2>About Me</h2>
            <p1>I am Christopher Brummer. I am a Frontend Web Developer. 
                I am skilled in fronted technologies such as HTML, CSS, Bootstrap5, JavaScript and ReactJS.
                 I am completely self taught and learned most of tech using the internet and experimenting around. 
                 I also used Udemy courses to help learn the fundamentals of more difficult tech like ReactJs but even with course work I spend hours on end building new things or tinkering with course projects. 
                 This is who I am.</p1>
            <img className = 'fillerimg' src ={about} alt="page" />
            <div className = 'about-part2'>
                <img src ={Info} alt = "Info Card" />
                <p>I am a learner and a problem solver. I take great pride in my ability to hone in on problems and trying every method I know or that google knows to solve a problem.</p>
                <p1>I am very eager to start my professional career in web development. My goal is to become a fullstack developer.
                     As such I have already started to learn backend tech like Python and MySQl. 
                     I am looking for a place that values learning new tech and new ways to solve old problems.  </p1>
            </div>
        </div>
    )
}

export default About;