import React, {useState,useContext, useEffect} from "react";
import {Context} from "../store/appContext"
export const Vehicles = () => {
    const {store, actions} = useContext(Context)
    console.log (store)
return (
    <div>
        {store.vehicles.results && store.vehicles.results.map((item,index)=> {
                 return (
                    <div className="card-group">
         <div className="card" style={{ width : '18rem' }}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">name: {item.name} </p>
                      <p className ="card-text">passangers: {item.passangers}</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                   
                        
                  )
        })}
    </div>
)
}