import React from 'react'
import './compont.css'
const Componats = (props) => {
  return (
    <>  
     <img src={props.xyz} alt='hgde' />
    </>
  )
}




const ReturnPathComponats =(props)=>{

  return (
    <>
        <div className='main'>
          <img src={props.image} alt="hgyu" />
        

        </div>
    </>
  )
}


export {Componats, ReturnPathComponats}
