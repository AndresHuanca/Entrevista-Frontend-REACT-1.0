import { createSlice } from '@reduxjs/toolkit';


export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        isLoadingPublications: true,
        error: null,
        publications: [],
        publicationsStart: [],
    },
    reducers: {
        onSetActivePublication: ( state, { payload } ) => {
            state.activePublication = payload;
        },
        onPublicationsLoaded: ( state, { payload = [] } ) => {
            state.isLoadingPublications = true;

            payload.forEach( publication => {
                
                if( publication.price !== null ) {
                    // Carga los productos si tiene una categoria
                    state.publicationsStart = payload;
                } 
                
            })

            // state.numberPublications = state.publications.length;
            state.isLoadingPublications = false;
        },
        onPublicationsLoadedAdmin: ( state, { payload = [] } ) => {
            state.isLoadingPublications = true;
            
            state.publications = payload;
                
            state.isLoadingPublications = false;
        },
        onClearActivePublication: ( state ) => {
            state.activePublication = null;
        },
        onAddNewPublication: ( state, { payload } ) => {
        
            state.publications.push( payload );
            // By close modal
            // state.activePublication = null;
            state.numberPublications = state.publications.length;
        },
        onLogoutPortfolio: ( state ) => {
            state.isLoadingPublications = true;
            state.publications = [];
            state.activePublication = null;
        },
    }
});

export const { 
    onSetActivePublication,
    onPublicationsLoaded,
    onPublicationsLoadedAdmin,
    onClearActivePublication,
    onAddNewPublication,
    onLogoutPortfolio
} = portfolioSlice.actions;

