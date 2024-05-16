import { createContext, useState } from "react";

export const AuthContext = createContext() ;

function AuthProvider({children}){
    let [isLoggedIn , setIsLoggedIn] = useState( JSON.parse(localStorage.getItem("isLoggedIn")) || false) ;
    let [finalMarksOfQuizExam , setFinalMarksOfQuizExam] = useState(0) ;
   
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn , finalMarksOfQuizExam , setFinalMarksOfQuizExam }}> {children} </AuthContext.Provider>
    )
}

export {AuthProvider} ;