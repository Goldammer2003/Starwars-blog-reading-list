import React, {useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";


export const Home = () => {
const [characters,setCharacters] =useState ([])
useEffect (()=> {
	getCharacters()
}, []) 
	const getCharacters = () => {
		fetch ("https://swapi.dev/api/people")
		.then (response =>response.json())
		.then (data =>setCharacters (data.results) )
		
	}
	console.log (characters)
	return (
		<div className="text-center mt-5">
		{characters.map ((item)=>{
			return (
				<Card obj={item}/>
			)
		})}
	</div>
	)}
