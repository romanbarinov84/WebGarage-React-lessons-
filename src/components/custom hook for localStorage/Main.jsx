import { useLocalStorage } from './Hooks/useLocalStorage';

const Main = () => {
    const [user, handleSetUser, handleRemoveUserName] = useLocalStorage(
        'user',
        'guest',
    );

    return (
        <div>
            <h1>
                Hello:{' '}
                <span
                    style={{
                        color: 'red',
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}
                >
                    {user}
                </span>
            </h1>
            <input
                type="text"
                value={user}
                onChange={(e) => handleSetUser(e.target.value)}
                placeholder="Enter your name!!!"
                style={{ border: '2px solid black' }}
            />
            <button
                style={{
                    background: 'cornflowerblue',
                    color: 'white',
                    padding: '3px',
                    marginLeft: '5px',
                }}
                onClick={handleRemoveUserName}
            >
                Очистить
            </button>
        </div>
    );
};

export default Main;
