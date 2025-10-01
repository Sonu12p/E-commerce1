import {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    const [userName, setUserName] = useState('')
    const[passwords, setPasswords] =  useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     const saveUser = localStorage.getItem('userData');
     console.log('JSON.parse(saveUser)',JSON.parse(saveUser))
        if(saveUser){
            setUserData(JSON.parse(saveUser))
        }
        setLoading(false);
    },[])


    const login = () => {
       if (userName && passwords) {
        const user = { username: userName, password: passwords }
      setUserData(user);
      console.log('user',user)
      localStorage.setItem('userData', JSON.stringify(user))
    }
    }

    const authenticatePage = () => {
        if(userData != null) return true
        else return false
    }
    // const authenticatePage = () => !!userData;

    const logout = () => {
        setUserData(null)
        setUserName("")
        setPasswords("")
    }


    return(
        <AuthContext.Provider value={{userName, setUserName,passwords,setPasswords, userData, setUserData, login, authenticatePage, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
