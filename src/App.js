import React from "react";
import ReactDOM from "react-dom/client"; 
import HeaderComponent from "./Components/Header";
import Body from "./Components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = () => {
   return (
      <div className="app">
         <HeaderComponent />
         <Body />
      </div>
   )
};

// root.render(jsxHeading);
root.render(<AppLayout />);
