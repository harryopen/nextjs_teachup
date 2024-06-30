import Link from "next/link";


const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
        <div className="p-4">
          <h1 className="text-xl font-bold">
            <Link href='/'>Teachup</Link>
          </h1>
          <ul className="mt-4">
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Courses</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Students</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  