import React from 'react';
import CiternTruck from './citernTruck.component';
import LanceTruck from './lanceTruck.component';

// const vehicules = [
//     {
//         id: 1,
//         name: 'Camion BOB',
//         type: 'lanceTruck',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Fire_Company_Engine_4.jpg/250px-Fire_Company_Engine_4.jpg',
//     },
//     {
//         id: 2,
//         name: 'Camion JOJO',
//         type: 'lanceTruck',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/IFA_W50L_Saracay_Pi%C3%B1as_firetruck.jpg/268px-IFA_W50L_Saracay_Pi%C3%B1as_firetruck.jpg',
//     },
//     {
//         id: 3,
//         name: 'Camion FATIGUE',
//         type: 'lanceTruck',
//         image: 'https://images.fineartamerica.com/images/artworkimages/small/3/old-fire-truck-elaine-berger.jpg',
//     },
//     {
//         id: 4,
//         name: 'Camion Rouge',
//         type: 'lanceTruck',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ChicoCAEngine4.jpg/200px-ChicoCAEngine4.jpg',
//     },
//     {
//         id: 5,
//         name: 'Exterminator',
//         type: 'lanceTruck',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stryker_%283561270493%29.jpg/200px-Stryker_%283561270493%29.jpg',
//     },
// ];

export default function Vehicules() {

    return (
        <div id="displayVehicule">
            <h2>Vehicules disponibles : </h2>        
                <div id="vehicules">                    
                        <CiternTruck />
                        <LanceTruck />
                </div>
        </div>
    )
}