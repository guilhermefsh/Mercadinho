export interface AuthContextProps {
    SignIn: ({ email, password }: SignInCredentials) => Promise<void>;
    SignOut: () => void;
    user: UserProps | null;
    signed: boolean;
}

export interface UserProps {
    email: string | null;
    permissions?: string[] | null;
    roles?: string[] | null;
}

export interface SignInCredentials {
    email: string;
    password: string;
}