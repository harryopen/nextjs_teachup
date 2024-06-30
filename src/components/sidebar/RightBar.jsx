import React from 'react';
import { HeroHighlight } from '../ui/hero-highlight';

function RightBar({ chapter }) {
   
  if (!chapter) {
    return <p className='text-black'>Please select a chapter.</p>;
  }

  return (
    <>
     <HeroHighlight>
    <div className='text-white flex flex-col p-10 justify-center'>
      <h2 className="text-2xl font-bold mb-4">{chapter.title}</h2>
      <p className="mb-4">{chapter.content}</p>
      {chapter.image && <img src={chapter.image} alt={chapter.title} className="rounded" />}
    </div>
   
       
    </HeroHighlight>
    </>
  );
}

export default RightBar;
