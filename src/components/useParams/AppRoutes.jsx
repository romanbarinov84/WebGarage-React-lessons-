import { Route, Routes } from "react-router"
import Home from "./Home"
import NotFoundPage from "./NotFoundPage"
import UserPage from "./UserPage"



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:userId" element={<UserPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default AppRoutes