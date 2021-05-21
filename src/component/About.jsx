import { Link } from "react-router-dom"

const About = () => {
    return ( 
        <div>
            <h1>About</h1>
            <p>Version 1.0.0</p>

            <br/>
            <br/>
            <Link to = '/'>Return to Home</Link>
        </div>
     );
}
 
export default About;