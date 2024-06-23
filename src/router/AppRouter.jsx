import { useEffect } from "react"
import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Products } from "../publication"
import { LoginPage } from "../auth"
import { Footer, Navbar } from "../components"
import { useAuthStore } from "../hooks"

export const AppRouter = () => {

    const { status, user, checkAuthToken } = useAuthStore();
    const [isLoading, setIsLoading] = useState(true); 

    // not-authenticated authenticated
    // const status = 'not-authenticated'
    // Revalida las rutas
    useEffect(() => {
        checkAuthToken()
        .then(() => {
            setIsLoading(false); // Cuando la comprobación de token esté completa, establece isLoading en false
        });
    }, [status]);
    
    if (isLoading) {
        return <h3 className="animate__animated animate__fadeIn animate_faster">Cargando...</h3>;
    }

    const adminRoutes = (
      <>
          {/* Agrega las rutas adicionales que solo los administradores deben ver */}
          <Route path="/user/products/*" element={<Products />} />
      </>
    );

    return (
        <>
          {/* Navbar */}
          <Navbar isAuthenticated={ status === 'authenticated' } />
      
          <Routes>
            {status === 'authenticated' ? (
              <>
                {user.role === 'ADMIN_ROLE' && adminRoutes}
                {/* Otras rutas para usuarios regulares aquí */}
                <Route path="/products/*" element={<Products />} />
                <Route path="/*" element={<Navigate to="/products" />} />
              </>
            ) : (
              <>
                <Route path="/auth/*" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/auth/login" />} />
              </>
            )}
          </Routes>
      
          {/* Footer */}
          <Footer />
        </>
      );
}
