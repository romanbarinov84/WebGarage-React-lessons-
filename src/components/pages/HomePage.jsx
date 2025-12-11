import "./HomePage.css";




const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-200 w-full rounded-2xl px-4 py-8 min-h-[calc(100vh-160px)] border-4 border-amber-300">
     
     <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Home Page Component</h1>
     <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-4">This is central container</p>
      
       <div className="flex flex-col md:flex-row justify-around items-center p-6 m-10 rounded-2xl bg-blue-200 gap-1.5">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-5 m-5">One</div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-5 m-5">Two</div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-5 m-5">Three</div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-orange-400 text-white text-2xl p-4 m-4 rounded-2xl border-4 border-white">
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
         <div className="border-2 border-gray-300 m-2 p-2 rounded-2xl">This is grid container</div>
       </div>

       <div className="flex flex-wrap justify-center p-2 bg-gray-100 rounded-2xl shadow-lg">
        <div className="flex flex-col bg-white shadow-md rounded-2xl m-4 p-4 w-64">
          <h2 className="text-lg font-bold ">Cart 1</h2>
          <p className="text-gray-400 shadow-md">Описание :</p>
          <ul>
            <li className="text-red-400 font-medium ">Название :<span className="text-black">LapTop</span></li>
            <li className="text-red-400 font-medium ">Номер(ID) :<span className="text-black">35708902</span></li>
            <li className="text-red-400 font-medium ">Наличие :<span className="text-black">В наличии</span></li>
          </ul>
        </div>
       </div>
    </div>
  );
};

export default HomePage;
