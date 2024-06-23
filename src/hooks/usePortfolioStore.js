import { useDispatch, useSelector } from "react-redux"
import { onPublicationsLoaded, onPublicationsLoadedAdmin, onSetActivePublication } from "../store";
import { portfolioApi } from "../api";
import { getEnvVariables } from "../helpers";
import { useMemo } from "react";


export const usePortfolioStore = ( category, search ) => {

    const dispatch = useDispatch();
    // Set default values
    const { 
        publicationsStart, 
    } = useSelector( state => state.portfolio );

    const {
        VITE_CAT_START,VITE_PUB_CAT_START,
        VITE_PUB_CAT_PUBLICATIONS,
        VITE_CAT_PUBLICATIONS
    } = getEnvVariables();

    // Active
    const setActivePublication = async( portfolioPublication ) => {
        // Para colocar en la carga de modald y actualizar el nombre de categoria
        // y no el id
        if( portfolioPublication.category === VITE_PUB_CAT_START ) {
            portfolioPublication.category = VITE_CAT_START;
        }else if( portfolioPublication.category === VITE_PUB_CAT_PUBLICATIONS ) {
            portfolioPublication.category = VITE_CAT_PUBLICATIONS;
        }

        dispatch( onSetActivePublication( portfolioPublication ) );
    };

    // Get
    const startLoadingPublications = async() => {
        try {
            if( category === VITE_PUB_CAT_START ){
                if( search ) {
                    // Upload page name
                    const { data } = await portfolioApi.get(`/products?/${ search }`)
                    dispatch( onPublicationsLoaded( data.products ) )
                }else {
                    // Upload page all
                    const { data } = await portfolioApi.get(`/products?from=0&limit=100`)
                    dispatch( onPublicationsLoaded( data.products ) )
                }
            }else if( category === VITE_CAT_PUBLICATIONS ){
                const { data } = await portfolioApi.get(`/posts?from=${ 0 }&limit=${ 0 }`);
                dispatch( onPublicationsLoadedAdmin( data.posts ) );
            } 
            
        } catch (error) {
            console.log(error);
            console.log('Error cargando publicaciones');
        }
    };
      // Para recargar y se muestre la nueva publicacion
      useMemo(() => {
        startLoadingPublications();
        
    }, [category]);

    return {
        //* Properties
        publicationsStart,

        //* Methods
        startLoadingPublications,
        setActivePublication,
    }

}