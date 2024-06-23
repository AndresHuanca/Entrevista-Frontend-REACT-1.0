import { useEffect } from "react";
import { TitlePage } from "../../components"
import { useAuthStore, useForm } from "../../hooks";
import Swal from "sweetalert2";
import '../css/styles.css';


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
};

const registerFormFields = {
    registerName: '',
    registerLastName:'',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
};

export const LoginPage = () => {

    const { loginEmail, 
            loginPassword, 
            onInputChange: onLoginFormChange 
    } = useForm( loginFormFields );
    
    const { startLoading, errorMessage, startRegister } = useAuthStore();
    
    const { registerName,
            registerLastName, 
            registerEmail, 
            registerPassword, 
            registerPassword2,
            onInputChange: onRegisterFormChange 
    } = useForm( registerFormFields );

    const loginSubmit = async( event ) => {
        event.preventDefault();
        // login
        await startLoading({ email: loginEmail, password: loginPassword });
    }
    // TODO:PARA IMPLEMENTAR UN REGISTER EN EL FUTURO ESTA COMENTADO

    const registerSubmit = async( event ) => {
        event.preventDefault();

        // Validate of password
        if( registerPassword !== registerPassword2 ){
            Swal.fire( 'Error en registro', 'Las contraseñas no son iguales', 'error' );
        } 
        // register
        await startRegister({ name: registerName, lastName: registerLastName, email: registerEmail, password: registerPassword })
    }

    // Alert
    useEffect(() => {
        
        if( errorMessage !== undefined ) {
            Swal.fire( 'Error en la autenticación', errorMessage, 'error' );
        }

    }, [ errorMessage ])

    return (
        <>
        <main className="main-containers" style={{ minHeight: "calc(100vh - 50px - 50px)" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-5">

                    <TitlePage  >
                        <div className="mt-5 "  style={{ color: 'white'}}>
                            
                            Iniciar Sesión
                        </div>
                    </TitlePage>
                
                <div className="container login-container animate__animated animate__fadeIn animate_faster">
                <div className="row">
                    <div className="col-md-6 mx-auto login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={ loginSubmit } >
                            <div className="form-group mb-2">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    required
                                    name='loginEmail'
                                    value={ loginEmail }
                                    onChange={ onLoginFormChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    required
                                    name='loginPassword'
                                    value={ loginPassword }
                                    onChange={ onLoginFormChange }
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login" 
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 login-form-2" style={{ backgroundColor: 'transparent' }}>
                        <h3>Registro</h3>
                        <form onSubmit={ registerSubmit } >
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombres"
                                    required
                                    name='registerName'
                                    value={ registerName }
                                    onChange={ onRegisterFormChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellidos"
                                    required
                                    name='registerLastName'
                                    value={ registerLastName }
                                    onChange={ onRegisterFormChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    required
                                    name='registerEmail'
                                    value={ registerEmail }
                                    onChange={ onRegisterFormChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    required
                                    name='registerPassword'
                                    value={ registerPassword }
                                    onChange={ onRegisterFormChange } 
                                />
                            </div>

                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña"
                                    required
                                    name='registerPassword2'
                                    value={ registerPassword2 }
                                    onChange={ onRegisterFormChange } 
                                />
                            </div>

                            <div className="d-flex justify-content-center">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear cuenta" />
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

                    </div>
                </div>
            </div>
        </main>            

        </>
    )
}
