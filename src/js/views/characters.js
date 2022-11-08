import React, {useState,useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
//import Card from "../component/card";
import {Context} from "../store/appContext"

export const Characters = () => {
	const {store, actions} = useContext(Context)
	console.log("hello",store)

	
	return (
		<div className="text-center mt-5 row container">
			 <div className="col-md-8">
      			
		
			
			 {store.characters.results && store.characters.results.map((item,index)=>{

          return (
			<div className="card-group">
 <div className="card" style={{ width : '18rem' }}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">height: {item.height} </p>
              <p className ="card-text">Hair-color: {item.hair_color}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
			</div>
           
                
          )
        })}
			

	</div>
	</div> 
	
	)}
