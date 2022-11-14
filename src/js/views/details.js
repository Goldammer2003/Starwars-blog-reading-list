import React from "react";
import { useParams } from "react-router-dom";

export const CountingforLearnMorePage = () => {
    const params = useParams();
    console.log("hey",params)
    return <h2>LearnMoreCount is {params.theid}</h2>

    
}




