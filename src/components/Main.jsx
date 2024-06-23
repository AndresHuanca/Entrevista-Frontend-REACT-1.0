import PropTypes  from "prop-types"
import '../../src/styles.css'

export const Main = ({ children }) => {

    return (
        <main className="main-container" style={{ minHeight: "calc(100vh - 50px - 50px)" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        { children }
                    </div>
                </div>
            </div>
        </main>
    )
}

// Props
Main.propTypes = {
    children: PropTypes.node.isRequired
}