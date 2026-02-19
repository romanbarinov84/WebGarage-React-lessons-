import { useState } from "react";


export const useLocalStorage = (key , initialValue) => {
    
       const getStoredValue = () => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Ошибка чтения данных из localStorage", error);
            return initialValue;
        }
    }

    const [storedValue, setStoredValue] = useState(getStoredValue);

    const setValue = (newUserName) => {
        try {
            setStoredValue(newUserName);
            localStorage.setItem(key, JSON.stringify(newUserName));
        } catch (error) {
            console.error("Ошибка добавления в localStorage", error);
        }
    }



    const handleRemoveUserName = () => {
        try {
            localStorage.removeItem(key);
            setValue(initialValue);
        } catch (error) {
            console.error("Ошибка удаления из localStorage", error);
        }
    }

    return [storedValue , setValue,handleRemoveUserName,]
}