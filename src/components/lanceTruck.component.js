import React from "react";

const lanceTruck = [
    {
        id: 1,
        name: 'Truck BOB',
        type: 'lanceTruck',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Fire_Company_Engine_4.jpg/250px-Fire_Company_Engine_4.jpg',
    },
    {
        id: 2,
        name: 'Truck JOJO',
        type: 'lanceTruck',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/IFA_W50L_Saracay_Pi%C3%B1as_firetruck.jpg/268px-IFA_W50L_Saracay_Pi%C3%B1as_firetruck.jpg',
    },
    {
        id: 3,
        name: 'Truck ODL',
        type: 'lanceTruck',
        picture: 'https://images.fineartamerica.com/images/artworkimages/small/3/old-fire-truck-elaine-berger.jpg',
    },
    
    {
        id: 4,
        name: 'Exterminator',
        type: 'lanceTruck',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stryker_%283561270493%29.jpg/200px-Stryker_%283561270493%29.jpg',
    },
]

export default function LanceTruck() {

    return (
        <div id="lanceTrucks">
           {
           lanceTruck.map((v) => (
            <div id="lanceTruckCard">
                <img src={v.picture}/>
                <h3>{v.name}</h3>              
            </div>
           ))} 
        </div>
    )
}