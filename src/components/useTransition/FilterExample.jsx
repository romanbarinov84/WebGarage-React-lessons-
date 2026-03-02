import { useState, useTransition } from "react"


 const data = Array.from({length:10000},(_,i) => `Element ${i + 1}`)



const FilterExample = () => {
    const [query , setQuery] = useState("");
    const [filteredData , setFilteredData] = useState(data);
    const [isPending , startTransition] = useTransition();

    function handleSearch(e){
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            setFilteredData(
                data.filter((item) => item.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            )
        })
    }
  return (
    <div>
        <h1>FilterExample</h1>
        <input type="text" value={query} onChange={handleSearch} style={{border:"2px solid blue"}}/>
        {isPending ? (
            <div style={{color:"red"}}>Поиск....</div>
        ):(
            <ul>
                {filteredData.slice(0,20).map((item , index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
        </div>
  )
}

export default FilterExample