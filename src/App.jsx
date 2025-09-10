import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center max-w-md px-4">
        {/* Circle Background with shadow */}
        <div className="relative w-64 h-64 mx-auto rounded-full bg-white shadow-xl flex items-center justify-center">
          {/* Plug Left */}
          <div className="absolute left-6 flex items-center">
            <div className="w-10 h-3 bg-blue-600 rounded-l-md"></div>
            <div className="w-2 h-6 bg-blue-600 mx-0.5 rounded"></div>
            <div className="w-2 h-6 bg-blue-600 mx-0.5 rounded"></div>
          </div>

          {/* Plug Right */}
          <div className="absolute right-6 flex items-center">
            <div className="w-2 h-6 bg-blue-600 mx-0.5 rounded"></div>
            <div className="w-2 h-6 bg-blue-600 mx-0.5 rounded"></div>
            <div className="w-10 h-3 bg-blue-600 rounded-r-md"></div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="mt-8 text-3xl font-extrabold text-blue-800">
          We’ll be back soon!
        </h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Our site is currently <span className="font-semibold">under maintenance</span>. 
          We’re working hard to bring you a smoother, faster, and better 
          experience. Thank you for your patience!
        </p>

        {/* Extra line */}
        <p className="mt-4 text-sm text-gray-500 italic">
          – Me is preparing something awesome 🚀
        </p>
      </div>
    </div>
  );
}

export default App;
