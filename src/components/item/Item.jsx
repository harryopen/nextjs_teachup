import React from 'react'

function Item(props) {
  return (
   
       <div className='item flex flex-col items-center justify-center text-center'>
       <img  onClick={window.scrollTo(0,0)}src={props.image} alt={props.name} className="w-full h-auto object-contain mb-4 max-h-48 lg:max-h-full" />
      <p className="text-lg font-bold mb-2">{props.name}</p>
      <div className="flex justify-center items-center mb-2">
        <div className="text-gray-700 text-2xl font-semibold">${props.new_price}</div>
        <div className="text-gray-600 text-2xl font-medium line-through ml-2">${props.old_price}</div>
      </div>
    </div>
    
  )
}

export default Item
