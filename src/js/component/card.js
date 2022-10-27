import React from 'react'

function Card(props) {
  return (
    <div className="card" style={{ width : '18rem' }}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.obj.name}</h5>
    <p className="card-text">height: {props.obj.height}</p>
    <p className ="card-text">Hair-color: {props.obj.hair_color}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  )
}

export default Card