
import AutorizationForm from "./AutorizationForm"
import { useForm } from "./hook/useForm";
import RegisterForm from "./RegisterForm"



const MainCustomHook = () => {
     
    const loginData = useForm({});
    const registerData = useForm({})

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Данные пользователя",loginData.formData)
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Данные пользователя",registerData.formData)
    }
  return (
    <div>
        <h1 style={{color:"gray",fontSize:"28px",fontWeight:"bold"}}>Регистрация</h1>
        <RegisterForm handleChange={loginData.handleChange} handleSubmit={handleLoginSubmit} formData={loginData.formData}/>
        <h1 style={{color:"gray",fontSize:"28px",fontWeight:"bold"}}>Авторизация</h1>
        <AutorizationForm handleChange={registerData.handleChange} handleSubmit={handleRegisterSubmit} formData={registerData.formData}/>
    </div>
  )
}

export default MainCustomHook