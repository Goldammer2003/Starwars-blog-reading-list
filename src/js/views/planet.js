import React, {useState,useContext, useEffect} from "react";
import {Context} from "../store/appContext"
export const Planets = () => {
    const {store, actions} = useContext(Context)
return (
    <div>
        {store.planets.results && store.planets.results.map((item,index)=> {
                 return (
                    <div className="card-group">
         <div className="card" style={{ width : '18rem' }}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">population: {item.population} </p>
                      <p className ="card-text">terrain: {item.terrain}</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                   
                        
                  )
        })}
    </div>
)
}