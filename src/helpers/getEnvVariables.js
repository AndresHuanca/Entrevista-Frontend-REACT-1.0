
export const getEnvVariables = () => {

    // import.meta.env;

    return{
        // ...import.meta.env
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_PUB_CAT_START: import.meta.env.VITE_PUB_CAT_START,
    
        VITE_CAT_START: import.meta.env.VITE_CAT_START,

    }

};