import PropTypes  from "prop-types"


export const TitlePage = ({ children }) => {
  return (
    <div className="text-center animate__animated animate__fadeIn animate_faster mt-1">
        <h1 style={{ fontFamily: "Roboto" }}>
            <span style={{ color: "black", fontWeight: "bold"}}>{ children }</span>
        </h1>
    </div>
  )
}

TitlePage.propTypes = {
    children: PropTypes.node.isRequired,
}