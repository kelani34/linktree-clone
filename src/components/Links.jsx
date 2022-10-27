import React from 'react'

function Links(props) {
  return (
    <div className='  items-center m-4'>
            <a href={props.link} id={props.id} target="_blank" rel="noreferrer noopener" classname= {props.display}> <div className=' rounded-lg p-4 text-center links'> {props.text}</div></a>
    </div>
  )
}

export default Links