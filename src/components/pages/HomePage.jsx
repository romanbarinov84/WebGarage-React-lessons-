import Button from "../Button/Button";
import { TaskList } from "../TaskList";
import TextComponent from "../TextComponent";
import UserList from "../UserList";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h2>Home pages</h2>
      <p>Welcome to our site</p>
          <TextComponent/>
      <Button/>
      <TaskList/>
      <UserList/>
    </div>
  );
}

export default HomePage;
