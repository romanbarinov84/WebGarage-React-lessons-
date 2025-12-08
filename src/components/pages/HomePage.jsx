import "./HomePage.css";
import { ModalPage } from "../ChildrenComponent/ModalPage";
import { ModalPage2 } from "../ChildrenComponent/ModalPage2";

const HomePage = () => {
  return (
    <div className="Home-Page">
      <ModalPage />
      <ModalPage2 />
      
      
    </div>
  );
};

export default HomePage;
