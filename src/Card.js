import React from 'react';


const Card = (props) =>{
    return(
        <div className="card my-2" >
  <img src={props.img} className="card-img-top img-fluid" alt={props.img} />
  <div class="card-body">
    <h4 className="card-title">{props.title}</h4>
    <p className='text-center'>
  <button className="btn btn-primary mr-2" data-toggle="collapse" data-target={`#${props.ind}`} aria-expanded="false" aria-controls={props.ind}>
    Description
  </button>
  {props.link &&<span>
     <a href={props.link} rel="noopener noreferrer" className="btn btn-primary ml-2" target='_blank'>View</a>
     </span>}
     </p>
<div className="collapse" id={props.ind}>
  <div className="card-text">
    {props.description}
  </div>
</div>
  </div>
</div>
    )
} 

export default Card;