import axios from "axios"
// import { useEffect } from "react"

const MainAxios = () => {

    // fetch( "https://67d67177286fdac89bc1ec9d.mockapi.io/Carts")
    //     .then((response) => {
    //         if(!response.ok){
    //             console.log("ошибка ответа сервера",)
    //         }else{
    //             console.log(response)
    //         }
    //         return response.json()
    //     })
    //     .then((data) => console.log("Данные загружены",data))
    //     .catch((error) => console.log("ошибка" ,error))

    // axios.get("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts")
    // .then((response) => console.log("данные загружены",response.data) )
    // .catch((error) => console.error("ошибка",error))
   

//     useEffect(() => {
//   const getData = async () => {
//     try {
//       const [response1, response2] = await Promise.all([
//         axios.get("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts"),
//         axios.get("https://67d67177286fdac89bc1ec9d.mockapi.io/Items")
//       ]);

//       console.log(response1.data);
//       console.log(response2.data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   getData();
// }, []);

  const getData = async() => {
    
    try {
         const response = await axios.post("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts",
        {
        text: "text 1",
        completed: false,
        name: "Roman",
        price: 150,
        model: "aaerf345",
        
      }
    );
    console.log("Успешно добавленно:",response.data);
    } catch (error) {
        console.error("ошибка",error);
        
    }
   
    
  }

  getData();
    
  return (
    <div>
        <h1 style={{color:"red",fontSize:"32px"}}>Users data</h1>
        
    </div>
  )
}

export default MainAxios