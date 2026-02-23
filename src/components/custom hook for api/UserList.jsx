import { useEffect } from 'react';
import useApi from './hooks/useApi';

const UserList = () => {
    const { data, loading, error, get } = useApi(
        'https://jsonplaceholder.typicode.com/',
    );

    useEffect(() => {
        get('users')
    },[get]);

    if(loading){
        return (<div>Загрузка...</div>)
    }

    if(error){
        return (<div>Ошибка: {error.message}</div>)
    }
    return (
           <div>
        <h2>Лист пользователей</h2>
        <ul>
            {data && data.map((user) => (
             <li key={user.id}>{user.name}</li>   
            ))}
            
        </ul>
    </div>
    )
 
};

export default UserList;
