import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";
import { PrivateProps } from "../interfaces/PrivateProps";

export const Private = ({ children }: PrivateProps) => {

    const { signed } = useContext(AuthContext);

    if (!signed) {
        return <Navigate to='/login' />;
    }

    return children;

}
