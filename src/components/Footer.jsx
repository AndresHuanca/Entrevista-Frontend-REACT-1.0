import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-success text-white text-center position-fixed-bottom bottom-0 w-100 p-1">
            {/* fixed-fixed para que el foter este al inicio */}
            <div className="container">
                <Link to="/" className="nav-link">Entrevista &copy; 2024</Link>
            </div>
        </footer>
    )
}
