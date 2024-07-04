'use client'
import { useSelector } from "react-redux";
import { HeroHighlight } from "../ui/hero-highlight";



const MainContent = () => {
  const dashItems = useSelector((state)=>state.dashboard_course);
    return (
        <>
         {console.log("The state from dashboard",dashItems)};
         <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome !</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
        <p>Your Active courses</p>
          <HeroHighlight> 
            
          </HeroHighlight>
        </div>
      </div>

      <div>
      <h1>Dashboard</h1>
      {dashItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          {/* Render other item details */}
        </div>
      ))}
      {/* Add your logic to add items to the dashboard */}
    </div>
        </>
    );
  };
  
  export default MainContent;
  