import React, { useState } from 'react'

export const AddCategory = ({onNewCategory }) => {
   const [inputValue, setInputValue] = useState('');
   
   const onChangeInput = (event)=>{
      setInputValue(event.target.value)
   }
   const onSubmit = (event)=>{
      event.preventDefault();
      if(inputValue.trim().length <= 1) return;
      // setCategories(categories => [inputValue,...categories]);
      setInputValue('')
      onNewCategory(inputValue.trim())
   }
  return (
   <div className="pb-4 pt-3">
      <form onSubmit={(event) => onSubmit(event)}>
         <input 
            type="text"
            placeholder='Buscar'
            className='form-control'
            value={inputValue}
            onChange={(event) => onChangeInput(event)}
         />
      </form>
   </div>
  )
}
