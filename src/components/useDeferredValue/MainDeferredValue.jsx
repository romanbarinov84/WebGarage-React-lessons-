import { useDeferredValue, useMemo, useState } from "react";


  const users = Array.from({length:10000},(_,i) => ({
        id:i,
        name:`user${i}`
    }))

const MainDeferredValue = () => {
  const [query , setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredUsers = useMemo(() => {
    console.log("Фильтрация....")
    return users.filter(user => user.name.toLocaleLowerCase().includes(deferredQuery.toLocaleLowerCase()))
  },[deferredQuery])
    return (
        <div>
            <h1>MainDeferredValue</h1>
            <input 
            type="text" 
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <p>Найденно:{filteredUsers.length}</p>
            <ul>
                {filteredUsers.slice(0,20).map(user => (
                    <li key={user.id} style={{color:"red"}}>{user.name}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default MainDeferredValue;
