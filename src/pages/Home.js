import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Aviyaan's Portfolio</h1>
            <p>Explore my details, academic records, and gallery!</p>

            <nav>
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/academic">Academic Performance</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
