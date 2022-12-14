import React, {useState,useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import { Link } from "react-router-dom";
export const Vehicles = () => {
    const {store, actions} = useContext(Context)
    console.log (store)
return (
  <div>
  <div>
        <h1 className="title">Vehicles</h1>
      </div>
    <div className= "d-flex scrolbar">
      
        {store.vehicles.results && store.vehicles.results.map((item,index)=> {
                 return (
                    <div className="card-group">
         <div className="card" style={{ width : '18rem' }}>
                    <img src={`${store.baseImgUrl}/vehicles/${index + 1}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">name: {item.name} </p>
                      <p className ="card-text">passengers: {item.passengers}</p>
                      <Link to={"/learnMore/vehicles/"+index} className="btn btn-primary">Learn more!</Link>
                      <button onClick={()=>actions.addFavouritestoList(item.name)} className="btn btn-outline-warning ms-5"><i class="far fa-heart "></i></button>
                    </div>
                    </div>
                    </div>
                   
                        
                  )
        })}
    </div>
    </div>
)
}