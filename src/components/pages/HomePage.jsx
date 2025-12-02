import Greeting from "./Greeting";

const HomePage = () => {

   
  const users = [
    {id:1 , name: "Roman" , age: 35 , phone:"0680328639"},
    {id:2 , name: "Alex", age: 24 , phone: "0971234567"},
    {id:3 , name: "Marina" , age: 68 , phone: "0458679234"}
  ]
  

  return (
    <div style={{ margin: 30 }}>
      <h1>HomePage</h1>
      {
        users.map((user) => (
          <Greeting user={user.id} name={user.name}/>
        ))
      }
    </div>
  );
};

export default HomePage;
