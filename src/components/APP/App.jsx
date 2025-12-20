import { userArray, UserContext } from "../../context/UserContext";
import HomePage from "../pages/HomePage";


const App = () => {
  return (
  <UserContext.Provider value={userArray}>

    <HomePage/>

  </UserContext.Provider>
  )
};

export default App;
