import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
            <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/about" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>About</Link>
            <Link to="/academic" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>Academic Performance</Link>
            <Link to="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</Link>
        </nav>
    );
}

export default Navbar;

