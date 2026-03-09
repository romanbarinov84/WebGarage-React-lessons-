import { Route, Routes } from "react-router"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import NotFoundPage from "./NotFoundPage"
import NavBarComponent from "./NavBarComponent"




const PagesContent = () => {

    const appRoutes = {
        HOME:"/",
        ABOUT:"/About",
        NOT_FOUND:"*"
    }
  return (
    <>
    <NavBarComponent/>
    <Routes>
        <Route path={appRoutes.HOME} element={<HomePage/>}/>
        <Route path={appRoutes.ABOUT} element={<AboutPage/>}/>
        <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage/>}/>
    </Routes>
    </>
    
  )
}

export default PagesContent