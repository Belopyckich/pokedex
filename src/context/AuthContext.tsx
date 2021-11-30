import { createContext, useState, FC} from "react";

interface AuthContextComponentProps {
    children: React.ReactNode | React.ReactChild
}

export interface AuthContextInterface {
    isAuth: boolean,
    setIsAuth?: any,
    userLikes: string[],
    setUserLikes: any
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export const AuthContextComponent: FC<AuthContextComponentProps> = ({children}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [userLikes, setUserLikes] = useState<string[]>([]);


    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, userLikes, setUserLikes}}>
            {children}
        </AuthContext.Provider>
    )
}
