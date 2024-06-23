
export const SearchInput = () => {
    return ( 

        <div className="input-group">
            <button className="btn btn-outline-success dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                    Categorias
            </button>
            
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Frutas</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Verduras</a></li>
            </ul>

            <input 
                type="text" 
                className="form-control border-success custom-input" 
                aria-label="Text input with 2 dropdown buttons"
                placeholder="Buscar Productos"
            />
            
            <button 
                className="btn btn-outline-success " 
                type="button"
                >
                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#000000' }}></i>
            </button>

        </div>
    )
}
