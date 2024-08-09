import React from 'react'
import PropTypes from 'prop-types'

export const FirstApp = ({title='No hay Título', subtitle='no hay titulo'}) => {
  return (
   <>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem libero, facere nemo sapiente necessitatibus sunt nostrum ut atque numquam consequuntur fugiat aliquam recusandae saepe neque quo sit a autem!</p>
   </>
    
  )
}

FirstApp.propType = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};