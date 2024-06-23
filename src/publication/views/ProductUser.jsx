import PropTypes  from "prop-types"


export const ProductUser = ({ name, price }) => {

    return (
        
        <div className="card ">
            <div className="card-header"  style={{ paddingTop: '0.0rem', paddingBottom: '0.0rem' }}><h5>{ name }</h5></div>
            <div className="card-body">
                <p className="card-text">Precio: S/ { price }</p>
            </div>
        </div>

    )
}


ProductUser.propTypes = {
    name: PropTypes.node.isRequired,
    price: PropTypes.number.isRequired,
}