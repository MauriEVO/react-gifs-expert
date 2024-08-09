import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components/gifComponent'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['dragon ball gt']);

  const onAddCayegory = (newCategory)=>{
    if(categories.includes(categories)) return;
    setCategories([newCategory, ...categories])
  }
  return (
    <>
      <div className="container pt-5">
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory= {value => onAddCayegory(value)}></AddCategory>
        {categories.map((category, i) =>(
          <GifGrid key={category} category={category}/>
        ))}
      </div>
    </>
  )
}
