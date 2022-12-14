import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import {Context} from "../store/appContext";



export const IndividualpageinformationforVehicles = () => {
    const {store}=useContext (Context)
    const params = useParams();

    console.log(params.theid)
    const informationforVehiclesinLearnMore = store.vehicles?.results[params.theid]
    return <div className="container">
        <div className="d-flex border-bottom border-danger pb-5"> <img className="individualpagepictures"src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></img>
      <div> <h1>{informationforVehiclesinLearnMore.name}</h1> 
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

      </div> 
      </div>
      <div className="row  text-center text-danger container">
        <div className="col"> Name <p>{informationforVehiclesinLearnMore.name}</p> </div>
        <div className="col"> Model<p>{informationforVehiclesinLearnMore.model}</p></div>
        <div className="col"> Manufacturer<p>{informationforVehiclesinLearnMore.manufacturer}</p></div>
        <div className="col"> Cost in credits<p>{informationforVehiclesinLearnMore.cost_in_credits}</p></div>
        <div className="col"> Crew <p>{informationforVehiclesinLearnMore.crew}</p></div>
        <div className="col"> Passangers<p>{informationforVehiclesinLearnMore.passengers}</p></div>
      </div>
         </div>
    
}



