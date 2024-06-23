import { useDispatch, useSelector } from "react-redux";
// import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store";
import { portfolioApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import { getEnvVariables } from "../helpers";
import Swal from "sweetalert2";


// Otra forma de desarrollo para no hacer thunks 
export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    
    const {
        VITE_ROLE
    } = getEnvVariables();


    // Login
    const startLoading = async({ email, password }) => {
        // State of store
        dispatch( onChecking() ); 
        try {
            
            const { data } = await portfolioApi.post('/auth/login', { email, password });
            // Save in localstorage
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            // Save in store
            dispatch( onLogin(data.user) )
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            // Elimina el errormessage del store
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    // Register
    const startRegister = async({ name, lastName, email, password }) => {
        const role =   VITE_ROLE;
        dispatch( onChecking() );

        try {
            
            const { data } = await portfolioApi.post('/users', { name, lastName, email, password, role });
            // Save in localstorage
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            // Save in store
            dispatch( onLogin({ name: data.name, uid: data.uid }) )
            Swal.fire('Nuevo Registro', 'Se creo la cuenta exitosamente', 'success');
        } catch (error) {
            console.log(error);
            // Iterar mensajes de error
            dispatch( onLogout('Error al registrar')  );

            // Elimina el errormessage del store
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 1000);
        } 
    }

    // Revalidación de JWT automatico y update of routes
    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        // Si token no es valido cierra sesión
        if( !token ) return dispatch( onLogout() );

        try { 
            const { data } = await portfolioApi.get('/auth');
            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin( data.user ) );
        } catch (error) {
            // Limpiar localstorage
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    // Logout
    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }
    
    return {
        //* Properties
        status, 
        user, 
        errorMessage,

        //* Methos
        checkAuthToken,
        startLoading,
        startLogout,
        startRegister
    }
}