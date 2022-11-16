import React, {useState,useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
//import Card from "../component/card";
import {Context} from "../store/appContext"
import {Link } from "react-router-dom"; 
import { useParams } from "react-router-dom";
import { Vehicles } from "./vehicles";
import {Characters} from "./characters"
import {Planets} from "./planet";

export const Home = () => {
    return (
        <div>
            <Characters/>
            <Planets/>
            <Vehicles/>
        </div>
    )
}