import React, {useState,useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
//import Card from "../component/card";
import {Context} from "../store/appContext"
import {Link } from "react-router-dom"; 
import { useParams } from "react-router-dom";

export const Characters = () => {
	const {store, actions} = useContext(Context)
	console.log("hello",store)
  const params = useParams();
	console.log (store)
	return (
		//<div className="text-center mt-5 row container">
    <>
    <div><h1 className="title">Characters</h1></div>
			 <div className=" d-flex scrolbar">
      			
		
			
			 {store.characters.results && store.characters.results.map((item,index)=>{

          return (
          
            <div className="d-flex">
              {/*<div></div>*/}
			<div className="card-group">
 <div className="card" style={{ width : '18rem' }}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">height: {item.height} </p>
              <p className ="card-text">Hair-color: {item.hair_color}</p>
              <Link to={"/learnMore/"+index} className="btn btn-primary">Learn more!</Link>
              <button onClick={()=>actions.addFavouritestoList(item.name)} className="btn btn-outline-warning ms-5"><i class="far fa-heart "></i></button>
            </div>
            </div>
			</div>
      </div> 
        
                
          )
        })}
			

	</div>
	 
	</> 
	)}
