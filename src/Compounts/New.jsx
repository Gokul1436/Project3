import React from 'react'
import'./Item.css'

const Item = (props) => {
  return (
    <>
      <div className="container-fuild ee">
        <div className="card item-card" >
          <img src={props.photo} className="card-img-top" alt="nothing" />
          <div className="card-body">
            <h6 className='loco'>{props.city}</h6>
            <h6 className='star'><spam className="spam">&#9733;</spam> {props.rating}</h6>
            <p className="card-title">{props.title}</p>
            <h5 className='price-new'>${props.price}/Per person</h5>
           
            <button type="button" class="btn btn2 btn-dark rounded-pill" >Book Now</button>
            </div>
        </div>
      </div>
      


    </>
  )
}

export default Item
