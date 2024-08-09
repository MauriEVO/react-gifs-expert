import React from 'react'
import './styles.css' 
export const GifItem = ({ url,description}) => {
   return (
      <div className='wrap_images'>
         <div className="card">
            <figure>
               <img src={url} alt="..."/>
            </figure>
            <div className="card-body">
               <h5 className="card-title">{description}</h5>
               <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
         </div>
      </div>
   )
}
