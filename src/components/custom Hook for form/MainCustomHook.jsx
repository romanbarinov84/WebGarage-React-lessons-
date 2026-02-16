import { useState } from "react"
import AutorizationForm from "./AutorizationForm"
import RegisterForm from "./RegisterForm"



const MainCustomHook = () => {
    const [loginData , setLoginData] = useState({});
    const [registerData , setRegisterData] = useState({});

    const handleLoginChange = (key , value) => {
        setLoginData({
            ...loginData,
            [key]:value
        })
    }


    const handleRegisterChange = (key , value) => {
        setRegisterData({
            ...registerData,
            [key]:value
        })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Данные пользователя",loginData)
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Данные пользователя",registerData)
    }
  return (
    <div>
        <h1 style={{color:"gray",fontSize:"28px",fontWeight:"bold"}}>Регистрация</h1>
        <RegisterForm handleChange={handleLoginChange} handleSubmit={handleLoginSubmit} formData={loginData}/>
        <h1 style={{color:"gray",fontSize:"28px",fontWeight:"bold"}}>Авторизация</h1>
        <AutorizationForm handleChange={handleRegisterChange} handleSubmit={handleRegisterSubmit} formData={registerData}/>
    </div>
  )
}

export default MainCustomHook