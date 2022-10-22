import React from 'react'

function Links(props) {
  return (
    <div className='items-center'>
            <a href={props.link} id={props.id}> <div className='rounded-lg p-4 text-center links'> {props.text}</div></a>
    </div>
  )
}

export default Links