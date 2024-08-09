import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {

   const [count, useCount] = useState(value);


   const handleAdd = () => {
      useCount(count+1);
      // useCount( (c)=> c +1 );
   }
   const handleSubtract = () => {
      (count > 0) ? useCount(count-1) : 0;
      // useCount( (c)=> c +1 );
   }
   const handleReset = () => {
      useCount(value);
   }

   return (
      <>
         <h1>CounterApp</h1>
         <strong>{count}</strong>
         <button className='btn btn-primary' onClick={handleAdd}>+1</button>
         <button className='btn btn-danger' onClick={handleSubtract}>-1</button>
         <button className='btn' onClick={handleReset}>Reset</button>
      </>
   )
}

CounterApp.propType = {
  value: PropTypes.number.isRequired
}
