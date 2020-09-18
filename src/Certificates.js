import React from 'react';
import Certs from './Certs';
import sololearn from './images/sololearn.jpg';


const Certificates = () =>{
    return(
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner caro">
  <div class="carousel-item active">
      <img src={sololearn} className="d-block w-100" alt={sololearn} style={{height:'400px'}}/>
      <div className='bg-light text-center'>
    <h5>sololearn</h5>
    <p>Javascript course</p>
      </div>
    </div>
    {Certs.map((data,index)=>{
      return(
        <div class="carousel-item" key={index}>
      <img src={data.img} className="d-block w-100" alt={data.img} style={{height:'400px'}}/>
      <div className='bg-light text-center'>
        <h5>{data.title}</h5>
    <p>{data.description}</p>
      </div>
    </div>
      )
    })}
    
   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        </>
    )
}

export default Certificates;