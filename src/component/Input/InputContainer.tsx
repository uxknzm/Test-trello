import React, { useState } from 'react';
import InputCard from './InputCard';



export default function InputContainer({ updateCardTitle, index }: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
    {open ? '': <button className='btn' onClick={() => setOpen(!open)}>+ Добавить...</button>}
      {
        open &&
        <div>
          <InputCard setOpen={setOpen} updateCardTitle={updateCardTitle} index={index} /> 
        </div>
      }
    </>
  );
}