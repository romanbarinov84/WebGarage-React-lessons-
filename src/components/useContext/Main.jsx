import { useCallback, useEffect, useState } from 'react';
import UserId from './UserId';
import UserName from './UserName';
import { UserContext } from './userContext';

const Main = () => {
    const [userData, setUserData] = useState("start");
    const [userId, setUserId] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`,
            );
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Ошибка загрузки данных', error);
            setError(error.message || "Произошла ошибка");
        } finally {
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        fetchData();
    }, [fetchData, userId]);

   

    return (
        <div>
            
            <h1>Данные пользователя</h1>
            <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(Number(e.target.value))}
                style={{ border: '2px solid black', padding: '5px' }}
            />

            <div>
                {loading && <p>Загрузка</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {userData && (
                    <ul>
                        <li>{userData.id}</li>
                        <li>{userData.name}</li>
                    </ul>
                )}
                
             
            </div>
           
            <UserContext.Provider value={userData}>
                <UserId />
                <UserName />
            </UserContext.Provider>
        </div>
    );
};

export default Main;
