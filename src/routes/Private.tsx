import { Navigate } from "react-router-dom";
import { PrivateProps } from "../interfaces/PrivateProps";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";

export const Private = ({ children }: PrivateProps) => {

    const signed = useSelector((state: RootState) => state.auth.signed)

    if (!signed) {
        return <Navigate to='/login' />;
    }

    return children;

}
