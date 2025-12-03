import { useState } from "react";
import "./RegForm.css";
import { checkPasswordMatch, validatePassword } from "./validators";

//^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$

function RegForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPassword , setConfirmPassword] = useState("");
  const [passwordMatch , setPasswordMatch] = useState(false);
  const [selectedYear , setSelectedYears] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
    setPasswordMatch(checkPasswordMatch(newPassword , confirmPassword))
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(checkPasswordMatch(password , newConfirmPassword))
  }

   
 const currentYear = new Date().getFullYear();
const years = Array.from({ length: 40 }, (_, i) => currentYear - i);
   
 const handleYearChange = (e) => {
    setSelectedYears(e.target.value);
 }

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form>
        <input type="text" placeholder="Name" onChange={handleNameChange} />
        <input
          type="email"
          placeholder="email-@"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {!isPasswordValid && (
          <div className="error-message">
            Пароль из букв и цыфр и не менее 8 цыфр
          </div>
        )}

        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordMatch && (
              <div className="error-message">Пароли пока что не совпадают</div>
        )}
      
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Дата окончания учебного заведения</option>
          {years.map((year) => (
            <option key={year.toString()} value={year}>{year}</option>
          ))}
          
        </select>

        <button type="submit">Отправить</button>
        <button type="reset">Отчистить форму</button>
        <div className="error-message">Проверте заполнение полей формы</div>
      </form>
    </div>
  );
}

export default RegForm;
