import { HeroHighlight } from "../ui/hero-highlight";


const MainContent = () => {
    return (
        <>
         
         <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome !</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
        <p>Your Active courses</p>
          <HeroHighlight> 
            
          </HeroHighlight>
        </div>
      </div>
        </>
    );
  };
  
  export default MainContent;
  