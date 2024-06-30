import Sidebar from "../../../components/sidebar/Sidebar";
import DashMain from "../../../components/dashmain/DashMain";

export default function Dashboard() {
  return (
    <>
      <div className=" flex flex-1">
        <div className="sticky top-0 h-screen w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>
        <DashMain />
      </div>
    </>
  );
}
