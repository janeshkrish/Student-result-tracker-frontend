import React , { createContext, useContext, useState,useEffect} from React;

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(
        localStorage.getItem('user') 
        ? JSON.parse(localStorage.getItem('user'))
        : null
    );
    const [loading,setLoading] = useState(false);
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user',JSON.stringify(userData));
    };
    const logout = () =>{
        setUser(null);
        localStorage.removeItem('user');
    };
    const value = {
        user,
        loading,
        login,
        logout,
        isLoggedIn: !! user
    };
    return (
        <AuthProvider.Provider value = {value}>
            {children}
        </AuthProvider.Provider>
    )
}
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new error("useAuth must be used within AuthProvider");
    }else{
        return context;
    }    
}

export default AuthProvider;