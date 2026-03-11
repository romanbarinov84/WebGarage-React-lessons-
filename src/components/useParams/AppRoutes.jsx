import { Route, Routes } from "react-router"
import Home from "./Home"
import NotFoundPage from "./NotFoundPage"



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default AppRoutes