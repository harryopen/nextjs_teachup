import React from 'react'
import all_courses from '@/app/assets/all_courses'
import Items from '@/components/item/Items';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import {useSelector} from 'react-redux';
function page({params}) {
  const Id = params.id;
  const product       =   all_courses.find((e)=> e.key === Number(Id))
 
  return (
    <div>
    

      <HeroHighlight >
      
     <div className=' mt-40 '>

      <Items  
       key={product.key}
       id={product.key}
       name={product.name}
       desc={product.desc} 
       image={product.img}
      />
      </div>

</HeroHighlight>
    </div>
  )
}

export default page
