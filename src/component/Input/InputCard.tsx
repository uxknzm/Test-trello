import React, { useState } from 'react';

export default function InputCard({ setOpen, index, updateCardTitle }: any) {
  const [text, setText] = useState('');


  return (
    <div>
      <input className='text-field__input' type="text" placeholder="Введите название доски..." value={text} onChange={e => setText(e.target.value)} />
      <div>
        <button className='btn' onClick={() => 
          {
            updateCardTitle(text, index)
            setText('')
            setOpen(false)
          }
          }>+ Добавить новое дело...</button>
      </div>
    </div>
  );
}