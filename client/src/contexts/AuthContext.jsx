import { useState, createContext, useContext } from 'react'

const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [redirect, _setRedirect] = useState('')

    const setUser = (value) => {
        _setUser(value)
        localStorage.setItem("user", JSON.stringify(value));
    }

    const setRedirect = (value) => {
        _setRedirect(value)
    }


    return (
        <AuthContext.Provider value={{ user, setUser, redirect, setRedirect }}>{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)