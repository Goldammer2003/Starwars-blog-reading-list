import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import {Context} from "../store/appContext";

export const CountingforLearnMorePage = () => {
    const {store}=useContext (Context)
    const params = useParams();
    console.log("hey",store.characters?.results[params.theid])
    const InformationforCharactersinLearnMore = store.characters?.results[params.theid]
    return <h1>{InformationforCharactersinLearnMore.name}</h1>;
    
}




