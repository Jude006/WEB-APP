import React from 'react'

function Button({type}) {
  return (
    <button className='py-3 px-8 bg-accent rounded-sm text-darkGrey'>{type}</button>
  )
}

export default Button
