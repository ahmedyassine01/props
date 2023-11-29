import React from 'react'
import Productcard  from './Productcard' 
  const Productlist = ({list}) => {
  return (
    <div> 
      {list.map((el,i)=><Productcard key={i} item={el} />)}  

    </div>
  )
}
export default Productlist;