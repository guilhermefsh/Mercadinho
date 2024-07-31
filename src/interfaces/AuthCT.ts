export interface AuthContextProps {
    SignIn: ({ email, password }: UserProps) => Promise<void>;
    SignOut: () => void;
    user: UserProps | null;
    signed: boolean;
}

export interface UserProps {
    email: string | null;
    password: string | null;
}