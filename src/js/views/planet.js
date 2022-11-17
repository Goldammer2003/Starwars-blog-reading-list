import React, {useState,useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import { Link } from "react-router-dom";
export const Planets = () => {
    const {store, actions} = useContext(Context)

return (
  <div>
    <div><h1 className="title">Planets</h1></div>
    <div className=" d-flex scrolbar">
        {store.planets.results && store.planets.results.map((item,index)=> {
                 return (
                    <div className="card-group">
         <div className="card" style={{ width : '18rem' }}>
                    <img src={index + 1 !== 1? `${store.baseImgUrl}/planets/${index + 1}.jpg` : `${store.baseImgUrl}/big-placeholder.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">population: {item.population} </p>
                      <p className ="card-text">terrain: {item.terrain}</p>
                      <Link to={"/learnMore/planets/"+index} className="btn btn-primary">Learn more!</Link>
                      <button  onClick={()=>actions.addFavouritestoList(item.name)} className="btn btn-outline-warning ms-5"><i class="far fa-heart "></i></button>
                    </div>
                    </div>
                    </div>
                   
                        
                  )
        })}
    </div>
    </div>
)
}