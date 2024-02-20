import { useLocation, Navigate } from 'react-router-dom';


export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const hasTokenLocalSt: string | null = localStorage.getItem('jwtToken');
    const hasTokenSessionSt: string | null = sessionStorage.getItem('jwtToken');
    const location = useLocation();

    if (location.pathname === '/main' && !(hasTokenLocalSt || hasTokenSessionSt)) {
        return <Navigate to='/auth' />
    }

    if (location.pathname === '/auth' && (hasTokenLocalSt || hasTokenSessionSt)) {
        return <Navigate to='/main' />
    }

    return <>{children}</>;
};