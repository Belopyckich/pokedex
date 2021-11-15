import { createContext, useState, FC} from "react";

interface AuthContextComponentProps {
    children: React.ReactNode | React.ReactChild
}

export interface AuthContextInterface {
    isAuth: boolean,
    setIsAuth?: any
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export const AuthContextComponent: FC<AuthContextComponentProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);


    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
