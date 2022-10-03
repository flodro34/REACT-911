import React from "react";

const citernTruck = [
    {
        id: 1,
        name: 'Citern One',
        type: 'citernTruck',
        capacity: '1000 L',
        picture: 'https://sapeurs-pompiers35.fr/content/uploads/2017/07/CCGC_1.jpg'
    },
    {
        id: 1,
        name: 'Citern Two',
        type: 'citernTruck',
        capacity: '5000 L',
        picture: 'https://i.skyrock.net/3887/73763887/pics/2898773765_small_1.jpg'
    },
    {
        id: 1,
        name: 'Citern Three',
        type: 'citernTruck',
        capacity: '500 L',
        picture: 'http://www.sdis30.fr/PublishingImages/Pages/Un-nouveau-camion-citerne-rural/CCR%20SHF%2020%2007%202018%20(7).jpg'
    }
]

export default function CiternTruck() {

    return (
        <div id="citernTruck">
           {
           citernTruck.map((v) => (
            <div id="citernTruckCard">
                <img src={v.picture} alt=""/>
                <h3>{v.name}</h3>
                <h3>{v.capacity}</h3>              
            </div>
           ))} 
        </div>
        
    )
}