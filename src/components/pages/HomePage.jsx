import "./HomePage.css";
import { ModalPage } from "../ChildrenComponent/ModalPage";
import { ModalPage2 } from "../ChildrenComponent/ModalPage2";
import { ButtonStyled } from "../styledComponents/Button.styled";
import { ModalPage3 } from "../ChildrenComponent/ModalPage3";


const HomePage = () => {
  return (
    <div className="Home-Page">
      <ModalPage />
      <ModalPage2 />
      <ModalPage3 />
      
      
    </div>
  );
};

export default HomePage;
