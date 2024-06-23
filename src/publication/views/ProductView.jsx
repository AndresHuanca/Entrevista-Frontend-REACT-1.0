import { useEffect } from "react";
import { ProductUser } from "./ProductUser";


export const ProductView = ({ ...rest }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página al principio al cargar el componente
    }, []);

    return (
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3  mt-4">  
                <ProductUser resto { ...rest }/>
            </div>
        </>
    )
}

