import { useState } from "react";
import "./RegForm.css";

function RegForm() {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");


    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName)
    }
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail)
    }

     
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword)
    }

     


  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form>
        <input type="text" placeholder="Name" onChange={handleNameChange} />
        <input type="email" placeholder="email-@" onChange={handleEmailChange}  />
        <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
        <div className="error-message">
          Пароль из букв и цыфр и не менее 8 цыфр
        </div>
        <input type="password" placeholder="Подтвердите пароль" />
        <div className="error-message">Пароли пока что не совпадают</div>
        <select>
          <option value="">Дата окончания учебного заведения</option>
          <option value="">2000</option>
        </select>

        <button type="submit">Отправить</button>
        <button type="reset">Отчистить форму</button>
         <div className="error-message">
          Проверте заполнение полей формы
        </div>
      </form>
    </div>
  );
}

export default RegForm;
