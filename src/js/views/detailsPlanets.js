import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import {Context} from "../store/appContext";


export const IndividualpageinformationforPlanets = () => {
    const {store}=useContext (Context)
    const params = useParams();
    console.log("hey",store.planets?.results[params.theid])
    const InformationforCharactersinLearnMore = store.planets?.results[params.theid]
    return <div className="container">
        <div className="d-flex border-bottom border-danger pb-5"> <img className="individualpagepictures"src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></img>
      <div> <h1>{InformationforCharactersinLearnMore.name}</h1> 
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

      </div> 
      </div>
      <div className="row  text-center text-danger container">
        <div className="col"> Name <p>{InformationforPlanetssinLearnMore.name}</p> </div>
        <div className="col"> Climate<p>{InformationforPlanetsinLearnMore.climate}</p></div>
        <div className="col"> Population <p>{InformationforPlanetsinLearnMore.population}</p></div>
        <div className="col"> Orbital Period <p>{InformationforPlanetsinLearnMore.orbital_period}</p></div>
        <div className="col"> Rotation Period <p>{InformationforPlanetsinLearnMore.rotation_period}</p></div>
        <div className="col"> Diameter<p>{InformationforPlanetsinLearnMore.diameter}</p> </div>
      </div>
         </div>
    
}



