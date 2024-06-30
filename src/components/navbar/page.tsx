"use client";
import { cn } from "@/app/utils/cn";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import Link from "next/link";

const Navbar: React.FC<{ className?: string }> = ({ className }) =>{
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0  max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
    
        <Link   className=" rounded-md p-1 bg-gradient-to-r  from-white ..."href="/">Home</Link>
        <MenuItem setActive={setActive} active={active} item="" />
        <MenuItem  setActive={setActive} active={active} item="Explore -> ">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink  href="" ><span className="text-[#5e5ecd]"> <Link  href={`/pages/allcourses/${"math"}`}> Maths</Link></span> 
            
            </HoveredLink>
            <HoveredLink href="/interface-design"  category="programming"> <Link  href={`/pages/allcourses/${"programming"}`}>Programming</Link></HoveredLink>
            <HoveredLink href="/seo"  category="science"> <Link  href={`/pages/allcourses/${"computer_scince"}`}>Computer Science</Link> </HoveredLink>
            <HoveredLink href="/branding" category="devolpment"> <Link  href={`/pages/allcourses/${"Devolpment"}`}>Devolpment</Link></HoveredLink>
          </div>
        </MenuItem>
        <Link href="/active_course"> <button className=" rounded-md p-1 bg-gradient-to-r from-white ...">Dashoard</button></Link>
      </Menu>
    </div>
  ); 
}
export default Navbar;
