import "./HomePage.css";




const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-200 w-full rounded-2xl px-4 py-8 min-h-[calc(100vh-160px)] border-4 border-amber-300">
     
     <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Home Page Component</h1>
     <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-4">This is central conteiner</p>
      
       <div>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
       </div>
    </div>
  );
};

export default HomePage;
