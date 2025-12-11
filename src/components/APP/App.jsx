

import HomePage from "../pages/HomePage"


const App = () => {
  return (
    <div className=" flex flex-col w-full bg-gray-500 p-10">
        <h1 className="text-4xl font-bold text-white text-center mt-10">React & Tailwind</h1>
        <div className="bg-blue-500  rounded-4xl text-center m-5 mx-auto border-4 border-amber-400 w-full">
          <h2 className="text-5xl text-red-300 fill-amber-300">Hello Hello</h2>     
          <button className="bg-red-400 box-border mx-auto text-center block mt-20 p-2 w-50 m-5 rounded-2xl text-white animate-pulse">Button</button>  </div> 
      <HomePage/>
     
    </div>
  )
}

export default App