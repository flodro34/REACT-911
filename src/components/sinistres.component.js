
import React from "react";

const sinistres = [
    {
        id: 1,
        type: 'incendie',
        danger : 4,
        localisation: {
            X:2,
            Y:5
        }
    },
    {
        id: 2,
        type: 'innondation',
        danger : 3,
        localisation: {
            X:6,
            Y:5
        }
    },
    {
        id: 3,
        type: 'animal_en_detresse',
        danger : "2",
        localisation: {
            X:7,
            Y:3
        }
    },
    
]

export default function Sinistres(){

    // var randomSinistre = function (obj) {
    //     var keys = Object.keys(obj)
    //     return obj[keys[ keys.length * Math.random() << 0]];
    // };
    return (
        <div id="sinister">
            <button onClick="">Quel sinistre ?</button>
            <h2>Sinistre en cours : </h2>
           {
           sinistres.map((v) => (
            <div id="sinCard">
                <h3>Dangerosité : {v.danger}</h3>
                <h3> Type : {v.type}</h3>              
            </div>
           ))} 
        </div>
    )
}