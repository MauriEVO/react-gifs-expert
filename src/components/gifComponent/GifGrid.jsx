import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
   const {images, isLoading} = useFetchGifs(category)
   console.log( 'images', images, 'isLoading', isLoading);

   return (
      <>

         <h2>{category}</h2>

         {
            isLoading && (<h2>Cargando..</h2>)
         }

         <div className='list_gifs_item' 
            style={{
               display: 'grid',
               width: '100%',
               listStyle: 'inherit',
               margin:'0px',
               gridTemplateColumns: 'repeat(3, 1fr)',
               gap: '20px',
            }}
         >
            {images.map(img =>(
               <GifItem
                  key={img.id}
                  {...img}
               ></GifItem>
            ))}
         </div>

      </>
   )
}
