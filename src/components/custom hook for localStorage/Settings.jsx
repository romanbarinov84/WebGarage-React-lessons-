import { useState } from 'react';

const Settings = () => {
    const [theme, setTheme] = useState('theme', 'light');
    const [language, setLanguage] = useState('language', 'ru');
    return (
        <div>
            <h1>Настройки</h1>
            <div>
                <h2>Тема</h2>
                <select value={theme}
                onChange={(e) => setTheme(e.target.value)}
                >
                    <option value="light">Светлая</option>
                    <option value="dark">Темная</option>
                    
                </select>
            </div>
            <h1>Язык</h1>
            <div>
                <h2>Тема</h2>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="ru">Русский</option>
                    <option value="eng">Английский</option>
                </select>
            </div>
            <p>Текущая тема : {theme}</p>
            <p>Текущий язик : {language}</p>
        </div>
    );
};

export default Settings;
